import { createContext } from 'react'

// Interface
import { NotificationShellContextInterface } from './NotificationShellContext.interface'

export const NotificationShellContext = createContext<NotificationShellContextInterface>({})
