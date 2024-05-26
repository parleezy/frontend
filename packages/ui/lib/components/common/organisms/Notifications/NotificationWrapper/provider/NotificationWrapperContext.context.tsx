import { createContext } from 'react'

// Interface
import { NotificationWrapperInterface } from './NotificationWrapper.interface'

export const NotificationWrapperContext = createContext<NotificationWrapperInterface>({
    visible: false,
    ref: { current: null },
    x: 0,
    y: 0,
    handleMouseDown: () => null,
})
