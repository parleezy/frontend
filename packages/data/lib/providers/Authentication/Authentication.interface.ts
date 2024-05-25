import { Api } from '@/api'

export interface AuthenticationInterface {
    authenticated: boolean
    initialised: boolean
    loading: boolean
    errors: {
        message: string
        details: string[]
    }
    user: Api.User | null
    login: (dto: Api.EmailLoginParams) => Promise<Api.Response<Api.Tokens> | Api.ErrorResponse>
    logout: () => Promise<Api.Response<null>>
    removeTokens: () => void
}
