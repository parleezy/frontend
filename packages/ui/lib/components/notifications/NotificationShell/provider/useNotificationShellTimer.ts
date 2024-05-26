import { useEffect, useState } from 'react'

// Types
import { NotificationTimeType } from '@/notifications/types'

export interface NotificationTimerProps {
    time: NotificationTimeType
    remove: () => void
}

export function useNotificationTimer({ remove, time }: NotificationTimerProps) {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        duration,
        pause,
        resume,
        start,
    }
}
