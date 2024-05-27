import { createFileRoute } from '@tanstack/react-router'

import { GamecenterContainer } from '@/containers/GamecenterContainer'

export const Route = createFileRoute('/_protected/gamecenter')({
    component: GamecenterContainer,
})
