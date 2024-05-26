import { createContext } from 'react'

import { NotificationsContextInterface } from './NotificationsContext.interface'

export const NotificationsContext = createContext<NotificationsContextInterface>({
    add: () => null,
    remove: () => null,
})
