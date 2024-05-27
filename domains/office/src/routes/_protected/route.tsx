import { createFileRoute, redirect } from '@tanstack/react-router'

// Packages
import { Api } from '@parleezy/data'

// Utils
import { validateUserRole } from '@/shared/utils'

export const Route = createFileRoute('/_protected')({
    beforeLoad: async ({ context }) => {
        if (!context.authentication.authenticated) {
            throw redirect({
                to: '/login',
            })
        }

        if (!context.authentication.user) {
            throw redirect({
                to: '/logout',
            })
        }

        if (
            !validateUserRole(
                [Api.RoleType.ADMINISTRATOR, Api.RoleType.OPERATOR, Api.RoleType.OWNER],
                context.authentication.user.role,
            )
        ) {
            throw redirect({
                to: '/logout',
            })
        }
    },
})
