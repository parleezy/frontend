import styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import { RouterProvider as TanstackRouterProvider, createRouter } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { AnimatePresence } from 'framer-motion'
import { PropagateLoader } from 'react-spinners'

// Packages
import { useAuthenticationContext } from '@thedeveloperkit/data'

// Config
import { routeTree } from '@/routeTree.gen'

// Containers
import { NotFoundContainer } from '@/containers/NotFoundContainer'

// Context
import { queryClient } from '@/providers/query'

// Set up a Router instance
const router = createRouter({
    routeTree,
    context: {
        authentication: undefined!,
        queryClient,
    },
    defaultPreload: 'intent',
    defaultNotFoundComponent: () => <NotFoundContainer />,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const Root = styled(Div100vh)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export function Provider() {
    const authentication = useAuthenticationContext()
    const i18n = useTranslation()

    return (
        <>
            {i18n.ready && authentication.initialised ? (
                <TanstackRouterProvider context={{ authentication }} router={router} />
            ) : (
                <AnimatePresence>
                    <Root>
                        <PropagateLoader color="#434343" size={10} speedMultiplier={0.75} />
                    </Root>
                </AnimatePresence>
            )}
        </>
    )
}
