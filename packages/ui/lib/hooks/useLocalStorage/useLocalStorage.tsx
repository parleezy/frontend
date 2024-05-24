import { useState, useEffect, Dispatch, SetStateAction } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.error('Failed to read from localStorage', error)

            return initialValue
        }
    })

    useEffect(() => {
        try {
            const prevItem = localStorage.getItem(key)
            const nextItem = JSON.stringify(value)
            if (prevItem !== nextItem) {
                localStorage.setItem(key, nextItem)
            }
        } catch (error) {
            console.error('Failed to write to localStorage', error)
        }
    }, [key, value])

    return [value, setValue]
}
