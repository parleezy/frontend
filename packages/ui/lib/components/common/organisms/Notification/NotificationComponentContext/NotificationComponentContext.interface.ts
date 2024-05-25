import { MutableRefObject } from 'react'

export interface NotificationComponentInterface {
    visible: boolean
    ref: MutableRefObject<HTMLDivElement | null>
    currentX: number
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
