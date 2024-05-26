import { createContext } from 'react'

// Interface
import { NotificationShellContextInterface } from './NotificationShellContext.interface'

export const NotificationShellContext = createContext<NotificationShellContextInterface>({
    ref: { current: null },
    x: 0,
    y: 0,
    handleMouseDown: () => null,
})
