import { useCallback, useEffect, useRef, useState } from 'react'

// Hooks
import { useNotificationTimer } from './useNotificationShellTimer'
import { useNotificationShellPosition } from './useNotificationShellPosition'

// Types
import { NotificationTimeType } from '@/notifications/types'

interface Props {
    remove: () => void
    config?: {
        time?: NotificationTimeType
    }
}

export function useNotificationShell({ remove, config = {} }: Props) {
    const { time = NotificationTimeType.STANDARD } = config

    const [dragging, setDragging] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const timer = useNotificationTimer({ remove, time })
    const position = useNotificationShellPosition()

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setDragging(true)

        position.start(e)
        timer.pause()
    }

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (dragging) {
                position.move.x(e)
                position.move.y(e)
            }
        },
        [dragging, position.move],
    )

    const handleMouseUp = useCallback(() => {
        if (dragging && ref.current) {
            const elementWidth = ref.current.offsetWidth

            if (Math.abs(position.x) > elementWidth * 0.2) {
                remove()
            } else {
                timer.resume()
            }
        }

        setDragging(false)
        position.reset()
    }, [timer, dragging, remove, position])

    useEffect(() => {
        if (dragging) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
        } else {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [dragging, handleMouseMove, handleMouseUp])

    return {
        ref,
        x: position.x,
        y: position.y,
        handleMouseDown,
    }
}
