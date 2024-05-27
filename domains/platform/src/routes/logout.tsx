import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

// Packages
import { useAuthenticationContext } from '@parleezy/data'

export const Route = createFileRoute('/logout')({
    component: Logout,
})

function Logout() {
    const { logout } = useAuthenticationContext()
    const navigate = useNavigate()

    useEffect(() => {
        async function init() {
            const res = await logout()

            if (res.success) {
                setTimeout(() => navigate({ to: '/login' }), 0)
            }
        }

        init()
    }, [logout, navigate])

    return <></>
}
