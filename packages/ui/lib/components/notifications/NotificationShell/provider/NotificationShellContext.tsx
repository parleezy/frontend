import { createContext } from 'react'

// Interface
import { NotificationShellContextInterface } from './NotificationShellContext.interface'
import { NotificationPositionType } from '@/notifications/types'

export const NotificationShellContext = createContext<NotificationShellContextInterface>({
    ref: { current: null },
    x: 0,
    y: 0,
    location: NotificationPositionType.BOTTOM_RIGHT,
    start: () => null,
})
