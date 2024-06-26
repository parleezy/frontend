import { createFileRoute } from '@tanstack/react-router'

// Container
import { LoginContainer } from '@/containers/LoginContainer'

export const Route = createFileRoute('/_authorize/login')({
    component: LoginContainer,
})
