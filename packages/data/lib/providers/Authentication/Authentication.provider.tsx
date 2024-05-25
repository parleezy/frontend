import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'
import Cookies from 'js-cookie'

// Data
import { Api } from '@/api'

// Authentication
import { AuthenticationContext } from './Authentication.context'
import { AuthenticationService } from '@/services'

// Utils
import { handleError } from '@/utils'

function useAuth(root: string) {
    const auth = useMemo(() => {
        return new AuthenticationService(root)
    }, [root])

    // Status State
    const [authenticated, setAuthenticated] = useState<boolean>(false)
    const [initialised, setInitialised] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    // Object State
    const [user, setUser] = useState<Api.User | null>(null)

    // Response
    const [errors, setErrors] = useState<{ message: string; details: string[] }>({ message: '', details: [] })

    useEffect(() => {
        const refresh = Cookies.get('refresh')

        async function init() {
            if (refresh) {
                const tokens = await auth.refresh()

                if (tokens) {
                    setTokens(tokens)
                    setAuthenticated(true)
                }

                const res = await auth.currentUser()

                if (res.data.success) {
                    setUser(res.data.data)
                }
            }

            setInitialised(true)
        }

        !initialised && init()
    }, [auth, initialised])

    const login = useCallback(
        async (dto: Api.EmailLoginParams): Promise<Api.Response<Api.Tokens> | Api.ErrorResponse> => {
            try {
                setLoading(true)

                const response = await auth.login(dto)

                setTokens(response.data.data)
                setAuthenticated(true)

                const res = await auth.currentUser()

                if (res.data.success) {
                    setUser(res.data.data)
                }

                return response.data
            } catch (e) {
                const err = handleError(e)

                if (err) {
                    setErrors({ message: err.data.message, details: err.data.details })
                }

                return err as Api.ErrorResponse
            } finally {
                setLoading(false)
            }
        },
        [auth],
    )

    const logout = useCallback(async (): Promise<Api.Response<null>> => {
        try {
            setLoading(true)

            const res = await auth.logout()

            Cookies.remove('access')
            Cookies.remove('refresh')

            return res.data
        } finally {
            removeTokens()
            setAuthenticated(false)
            setLoading(false)
        }
    }, [auth])

    const setTokens = (data: Api.Tokens) => {
        Cookies.set('access', data.access, { expires: 15 / (24 * 60), path: '/', secure: false })
        Cookies.set('refresh', data.refresh, { expires: 7, path: '/', secure: false })
    }

    const removeTokens = () => {
        Cookies.remove('access')
        Cookies.remove('refresh')

        setAuthenticated(false)
    }

    return {
        authenticated,
        initialised,
        loading,
        errors,
        user,
        login,
        logout,
        removeTokens,
    }
}

interface Props {
    root: string
}

export function AuthenticationProvider({ children, root }: PropsWithChildren<Props>) {
    return <AuthenticationContext.Provider value={useAuth(root)}>{children}</AuthenticationContext.Provider>
}
