import { MutableRefObject } from 'react'

export interface NotificationWrapperInterface {
    visible: boolean
    ref: MutableRefObject<HTMLDivElement | null>
    x: number
    y: number
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
