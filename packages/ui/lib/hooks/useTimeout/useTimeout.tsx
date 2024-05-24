import { useEffect, useRef } from 'react'

export function useTimeout(callback: () => void, delay: number | null | undefined) {
    const savedCallback = useRef<() => void>()

    useEffect(() => {
        savedCallback.current = callback

        const tick = () => {
            if (savedCallback.current) {
                savedCallback.current()
            }
        }

        if (delay !== null && delay !== undefined) {
            const id = setTimeout(tick, delay)
            return () => clearTimeout(id)
        }
    }, [callback, delay])
}
