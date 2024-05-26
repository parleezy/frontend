import { NotificationPositionType } from './NotificationPosition.type'
import { NotificationTimeType } from './NotificationTime.type'

export interface NotificationInterface {
    id: string
    config?: {
        position?: NotificationPositionType
        time?: NotificationTimeType
    }
    element: (remove?: () => void) => JSX.Element
}
