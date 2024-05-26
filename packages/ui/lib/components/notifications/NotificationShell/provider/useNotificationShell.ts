import { useEffect, useRef, useState, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react'

// Types
import { NotificationPositionType, NotificationTimeType } from '@/notifications/types'
import { UseMovePositionInterface, useMouseDrag, useMovePosition, useTimer, useTouchDrag } from '@/hooks'

interface Props {
    remove: () => void
    config?: {
        position?: NotificationPositionType
        time?: NotificationTimeType
    }
}

const duration = (time: NotificationTimeType): number => {
    switch (time) {
        case NotificationTimeType.ACTIONABLE:
            return 6000
        case NotificationTimeType.IMPORTANT:
            return 9000
        case NotificationTimeType.PERSIST:
            return 20000
        case NotificationTimeType.STANDARD:
        default:
            return 4000
    }
}
export function useNotificationShell({ remove, config = {} }: Props) {
    const { position: location = NotificationPositionType.BOTTOM_RIGHT, time = NotificationTimeType.STANDARD } = config

    const [dragging, setDragging] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const timer = useTimer({ duration: duration(time), action: remove })
    const position: UseMovePositionInterface<HTMLDivElement> = useMovePosition<HTMLDivElement>()

    const action = () => {
        if (dragging && ref.current) {
            if (
                Math.abs(position.y) > ref.current.offsetHeight * 0.2 ||
                Math.abs(position.x) > ref.current.offsetWidth * 0.2
            ) {
                remove()
            } else {
                timer.resume()
            }
        }
    }

    const mouse = useMouseDrag<HTMLDivElement>({ dragging, position, complete: () => action(), setDragging })
    const touch = useTouchDrag<HTMLDivElement>({ dragging, position, complete: () => action(), setDragging })

    const start = (e: ReactMouseEvent<HTMLDivElement> | ReactTouchEvent<HTMLDivElement>) => {
        position.start(e)

        setDragging(true)
        timer.pause()
    }

    useEffect(() => {
        if (dragging) {
            document.addEventListener('mousemove', mouse.move)
            document.addEventListener('mouseup', mouse.up)
            document.addEventListener('touchmove', touch.move)
            document.addEventListener('touchend', touch.end)
        } else {
            document.removeEventListener('mousemove', mouse.move)
            document.removeEventListener('mouseup', mouse.up)
            document.removeEventListener('touchmove', touch.move)
            document.removeEventListener('touchend', touch.end)
        }

        return () => {
            document.removeEventListener('mousemove', mouse.move)
            document.removeEventListener('mouseup', mouse.up)
            document.removeEventListener('touchmove', touch.move)
            document.removeEventListener('touchend', touch.end)
        }
    }, [dragging, mouse, touch.end, touch.move])

    return {
        ref,
        x: position.x,
        y: position.y,
        location,
        start,
    }
}
