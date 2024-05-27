import { createFileRoute } from '@tanstack/react-router'

// Containers
import { LoginContainer } from '@/containers/LoginContainer/LoginContainer'

export const Route = createFileRoute('/')({
    component: LoginContainer,
})
