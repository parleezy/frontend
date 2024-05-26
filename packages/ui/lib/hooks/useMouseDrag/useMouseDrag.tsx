import { Dispatch, SetStateAction, useCallback } from 'react'
import { UseMovePositionInterface } from '@/hooks/useMovePosition'

export interface UseMouseDragProps<T> {
    dragging: boolean
    position: UseMovePositionInterface<T>
    complete: () => void
    setDragging: Dispatch<SetStateAction<boolean>>
}

export function useMouseDrag<T>({ dragging, position, complete, setDragging }: UseMouseDragProps<T>) {
    const move = useCallback(
        (e: MouseEvent) => {
            if (dragging) {
                position.move.x(e)
                position.move.y(e)
            }
        },
        [dragging, position.move],
    )

    const up = useCallback(() => {
        complete()
        setDragging(false)
        position.reset()
    }, [complete, position, setDragging])

    return {
        move,
        up,
    }
}
