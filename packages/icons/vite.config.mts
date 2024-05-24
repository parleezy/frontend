/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as vite from 'vite'
import path from 'node:path'

// Plugins
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default vite.defineConfig({
    plugins: [
        viteTsconfigPaths(),
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, './lib/index.ts'),
            name: 'Icons Library',
            formats: ['es', 'umd'],
            fileName: (format) => `icons.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
})
