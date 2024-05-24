import { PrelaunchContainer } from '@/containers/PrelaunchContainer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: PrelaunchContainer,
})
