/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as vite from 'vite'

// Plugins
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default vite.defineConfig({
    plugins: [viteTsconfigPaths(), react(), TanStackRouterVite()],
})
