import { createFileRoute } from '@tanstack/react-router'

// Container
import { DashboardContainer } from '@/containers/DashboardContainer'

export const Route = createFileRoute('/_protected/')({
    component: DashboardContainer,
})
