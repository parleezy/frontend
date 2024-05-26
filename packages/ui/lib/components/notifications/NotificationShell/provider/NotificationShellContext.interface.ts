import { MutableRefObject } from 'react'

export interface NotificationShellContextInterface {
    ref: MutableRefObject<HTMLDivElement | null>
    x: number
    y: number
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
