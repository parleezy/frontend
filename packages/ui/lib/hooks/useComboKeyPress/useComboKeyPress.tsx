import { useCallback, useEffect, useState } from 'react'

export function useComboKeyPress(keys: string[], action: () => void) {
    const [pressedKeys, setPressedKeys] = useState(new Set<string>())

    const downHandler = useCallback((event: KeyboardEvent) => {
        setPressedKeys((prev) => new Set(prev.add(event.key)))
    }, [])

    const upHandler = useCallback((event: KeyboardEvent) => {
        setPressedKeys((prev) => {
            const newSet = new Set(prev)
            newSet.delete(event.key)
            return newSet
        })
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', downHandler)
        document.addEventListener('keyup', upHandler)

        return () => {
            document.removeEventListener('keydown', downHandler)
            document.removeEventListener('keyup', upHandler)
        }
    }, [downHandler, upHandler])

    useEffect(() => {
        const allKeysPressed = keys.every((key) => pressedKeys.has(key))
        const noExtraKeys = pressedKeys.size === keys.length
        if (allKeysPressed && noExtraKeys) {
            action()
        }
    }, [pressedKeys])
}
