import { MutableRefObject } from 'react'

// Types
import { NotificationPositionType } from '@/notifications/types'

export interface NotificationShellContextInterface {
    ref: MutableRefObject<HTMLDivElement | null>
    x: number
    y: number
    location: NotificationPositionType
    start: (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void
}
