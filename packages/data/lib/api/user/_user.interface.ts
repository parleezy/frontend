import { Api } from '@/api'

export interface User {
    _id: string
    email: string
    role: Api.RoleType
    verified: boolean
}
