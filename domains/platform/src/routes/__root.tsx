import { useEffect } from 'react'
import { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

// Packages
import { AuthenticationInterface, useAuthenticationContext } from '@parleezy/data'

export const Route = createRootRouteWithContext<{
    authentication: AuthenticationInterface
    queryClient: QueryClient
}>()({
    component: RootComponent,
})
function RootComponent() {
    const { removeTokens } = useAuthenticationContext()
    const navigate = useNavigate()

    /**
     * If the refresh token fails it will dispatch a logout-event, here we then logout the user and redirect
     */
    useEffect(() => {
        window.addEventListener('logout-event', () => {
            removeTokens()
            navigate({ to: '/' })
        })

        return () => {
            window.addEventListener('logout-event', () => {
                removeTokens()
                navigate({ to: '/' })
            })
        }
    }, [removeTokens, navigate])

    return (
        <>
            <Outlet />
            {import.meta.env.MODE !== 'production' && <TanStackRouterDevtools position="bottom-right" />}
        </>
    )
}
