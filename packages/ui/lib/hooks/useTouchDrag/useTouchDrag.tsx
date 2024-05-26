import { Dispatch, SetStateAction, useCallback } from 'react'
import { UseMovePositionInterface } from '@/hooks/useMovePosition'

export interface UseTouchDragProps<T> {
    dragging: boolean
    position: UseMovePositionInterface<T>
    complete: () => void
    setDragging: Dispatch<SetStateAction<boolean>>
}

export function useTouchDrag<T>({ dragging, position, complete, setDragging }: UseTouchDragProps<T>) {
    const move = useCallback(
        (e: TouchEvent) => {
            if (dragging) {
                position.move.x(e)
                position.move.y(e)
            }
        },
        [dragging, position.move],
    )

    const end = useCallback(() => {
        complete()
        setDragging(false)
        position.reset()
    }, [complete, position, setDragging])

    return {
        move,
        end,
    }
}
