/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as vite from 'vite'

// Plugins
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default vite.defineConfig({
    plugins: [viteTsconfigPaths(), react()],
    test: {
        globals: true,
        environment: 'jsdom',
        css: true,
        watch: false,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: ['**/index.ts', '**/*.d.ts', '**/*.interface.ts', '**/*.type.ts', '**/*.styled.ts', '**/utils/*'],
        },
    },
})
