import { PropsWithChildren, useRef, useState, useEffect, useCallback } from 'react'

// Context
import { NotificationWrapperContext } from './NotificationWrapperContext.context'

// Hooks
import { useNotificationTimer } from './useNotificatonTimer'
import { useNotificationPosition } from './useNotificationPosition'
import { NotificationTimeType } from './NotificationTimer.type'

interface Props {
    remove: () => void
    config?: {
        time?: NotificationTimeType
    }
}

function useNotificationWrapper({ remove, config = {} }: Props) {
    const { time = NotificationTimeType.STANDARD } = config

    const [visible, setVisible] = useState<boolean>(true)
    const [dragging, setDragging] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const timer = useNotificationTimer({ setVisible, remove, time })
    const position = useNotificationPosition()

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
                setVisible(false)
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
        visible,
        x: position.x,
        y: position.y,
        handleMouseDown,
    }
}

export function NotificationWrapperProvider({ remove, config, children }: PropsWithChildren<Props>) {
    return (
        <NotificationWrapperContext.Provider value={useNotificationWrapper({ remove, config })}>
            {children}
        </NotificationWrapperContext.Provider>
    )
}
