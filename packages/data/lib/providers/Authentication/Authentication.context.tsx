import { createContext } from 'react'

// Interface
import { AuthenticationInterface } from './Authentication.interface'
import { Api } from '@/api'

export const AuthenticationContext = createContext<AuthenticationInterface>({
    authenticated: false,
    initialised: false,
    loading: false,
    errors: {
        message: '',
        details: [],
    },
    user: null,
    logout: async () => ({
        data: null,
        success: true,
    }),
    login: async (_: Api.EmailLoginParams) => ({
        data: {
            access: '',
            refresh: '',
        },
        success: true,
    }),
    removeTokens: () => null,
})
