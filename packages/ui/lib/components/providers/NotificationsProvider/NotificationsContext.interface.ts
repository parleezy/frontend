import { NotificationInterface } from './Notification.interface'

export interface NotificationsContextInterface {
    add: (notification: NotificationInterface) => void
    remove: (id: string) => void
}
