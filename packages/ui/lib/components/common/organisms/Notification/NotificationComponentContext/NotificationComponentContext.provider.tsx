import { PropsWithChildren, useRef, useState, useEffect, useCallback } from 'react'

// Context
import { NotificationComponentContext } from './NotificationComponentContext.context'

function useNotificationComponent() {
    const [visible, setVisible] = useState<boolean>(true)
    const [startX, setStartX] = useState<number>(0)
    const [currentX, setCurrentX] = useState<number>(0)
    const [dragging, setDragging] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setStartX(e.clientX)
        setDragging(true)
    }

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (dragging) {
                setCurrentX(e.clientX - startX)
            }
        },
        [dragging, startX],
    )

    const handleMouseUp = useCallback(() => {
        if (dragging && currentX < -100) {
            setVisible(false)
        }
        setDragging(false)
        setCurrentX(0)
    }, [currentX, dragging])

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
        visible,
        ref,
        currentX,
        handleMouseDown,
    }
}

export function NotificationComponentProvider({ children }: PropsWithChildren) {
    return (
        <NotificationComponentContext.Provider value={useNotificationComponent()}>
            {children}
        </NotificationComponentContext.Provider>
    )
}
