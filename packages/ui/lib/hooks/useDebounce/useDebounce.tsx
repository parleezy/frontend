import { useState, useEffect } from 'react'

export function useDebounce(value: string, delay: number): string {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            if (debouncedValue !== value) {
                setDebouncedValue(value)
            }
        }, delay)

        return () => clearTimeout(handler)
    }, [value, delay, debouncedValue])

    return debouncedValue
}
