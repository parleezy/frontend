import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { NotificationTimeType } from './NotificationTimer.type'

export interface NotificationTimerProps {
    time: NotificationTimeType
    setVisible: Dispatch<SetStateAction<boolean>>
    remove: () => void
}

export function useNotificationTimer({ setVisible, remove, time }: NotificationTimerProps) {
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
    const [isPaused, setIsPaused] = useState<boolean>(false)

    const duration = (): number => {
        switch (time) {
            case NotificationTimeType.ACTIONABLE:
                return 6000
            case NotificationTimeType.IMPORTANT:
                return 9000
            case NotificationTimeType.PERSIST:
                return 20000
            case NotificationTimeType.STANDARD:
            default:
                return 4000
        }
    }

    const start = () => {
        const id = setTimeout(() => {
            setVisible(false)
            remove()
        }, duration())
        setTimeoutId(id)
    }

    const pause = () => {
        if (timeoutId) {
            clearTimeout(timeoutId)
            setTimeoutId(null)
            setIsPaused(true)
        }
    }

    const resume = () => {
        if (isPaused) {
            start()
            setIsPaused(false)
        }
    }

    useEffect(() => {
        start()

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [])

    return {
        duration,
        pause,
        resume,
        start,
    }
}
