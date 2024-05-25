import { useContext } from 'react'

// Context
import { AuthenticationContext } from './Authentication.context'

export function useAuthenticationContext() {
    return useContext(AuthenticationContext)
}
