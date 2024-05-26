import { useState } from 'react'

export function useNotificationShellPosition() {
    const [initialX, setInitialX] = useState<number>(0)
    const [initialY, setInitialY] = useState<number>(0)
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)

    const start = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setInitialX(e.clientX)
        setInitialY(e.clientY)
    }

    const reset = () => {
        setInitialX(0)
        setInitialY(0)
    }

    const moveX = (e: MouseEvent) => setX(e.clientX - initialX)
    const moveY = (e: MouseEvent) => setY(e.clientY - initialY)

    return {
        x,
        y,
        start,
        reset,
        move: {
            x: moveX,
            y: moveY,
        },
    }
}
