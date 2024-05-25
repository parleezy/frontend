import { NotificationInterface } from '../types/Notification.interface'

export interface NotificationsContextInterface {
    add: (notification: NotificationInterface) => void
    remove: (id: string) => void
}
