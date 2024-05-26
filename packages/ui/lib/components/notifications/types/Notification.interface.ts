export interface NotificationInterface {
    id: string
    element: (remove?: () => void) => JSX.Element
}
