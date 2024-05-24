import { RouterProvider as TanstackRouterProvider, createRouter } from '@tanstack/react-router'

// Config
import { routeTree } from '@/routeTree.gen'

// Set up a Router instance
const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
})

// Register things for typesafety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export function Provider() {
    return <TanstackRouterProvider router={router} />
}
