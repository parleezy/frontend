import { useState, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react'

export interface UseMovePositionInterface<T> {
    x: number
    y: number
    start: (e: ReactMouseEvent<T> | ReactTouchEvent<T>) => void
    reset: () => void
    move: {
        x: (e: MouseEvent | TouchEvent) => void
        y: (e: MouseEvent | TouchEvent) => void
    }
}

export function useMovePosition<T>(): UseMovePositionInterface<T> {
    const [initialX, setInitialX] = useState<number>(0)
    const [initialY, setInitialY] = useState<number>(0)
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)

    const start = (e: ReactMouseEvent<T> | ReactTouchEvent<T>) => {
        if ('touches' in e) {
            setInitialX(e.touches[0].clientX)
            setInitialY(e.touches[0].clientY)
        } else {
            setInitialX(e.clientX)
            setInitialY(e.clientY)
        }
    }

    const reset = () => {
        setInitialX(0)
        setInitialY(0)
    }

    const moveX = (e: MouseEvent | TouchEvent) => {
        if (e instanceof MouseEvent) {
            setX(e.clientX - initialX)
        } else if (e instanceof TouchEvent) {
            setX(e.touches[0].clientX - initialX)
        }
    }

    const moveY = (e: MouseEvent | TouchEvent) => {
        const newY = e instanceof MouseEvent ? e.clientY - initialY : e.touches[0].clientY - initialY

        if (newY <= 0) {
            setY(newY)
        }
    }

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
