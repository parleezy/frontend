import { createContext } from 'react'

// Interface
import { NotificationComponentInterface } from './NotificationComponentContext.interface'

export const NotificationComponentContext = createContext<NotificationComponentInterface>({
    visible: false,
    ref: { current: null },
    currentX: 0,
    handleMouseDown: () => null,
})
