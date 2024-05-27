import { Api } from '@parleezy/data'

export function validateUserRole(valid: Api.RoleType[], role: Api.RoleType): boolean {
    return valid.includes(role)
}
