import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorize')({
    beforeLoad: async ({ context }) => {
        if (context.authentication.authenticated) {
            throw redirect({
                to: '/',
            })
        }
    },
})
