import { useEffect, useState } from 'react'

export interface UserTimerProps {
    duration: number
    action: () => void
}

export function useTimer({ duration, action }: UserTimerProps) {
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
    const [isPaused, setIsPaused] = useState<boolean>(false)

    const start = () => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        const id = setTimeout(() => {
            action()
        }, duration)
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
