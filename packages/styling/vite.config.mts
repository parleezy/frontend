/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as vite from 'vite'
import path from 'path'

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
    build: {
        lib: {
            entry: path.resolve('./lib/index.ts'),
            name: `data library`,
            formats: ['es', 'umd'],
            fileName: (format) => `styling.${format}.js`,
        },
        rollupOptions: {
            external: [
                'axios',
                'framer-motion',
                'js-cookie',
                'polished',
                'react',
                'react-dom',
                'styled-components',
                '@tanstack/react-query',
            ],
            output: {
                globals: {
                    '@tanstack/react-query': 'reactQuery',
                    axios: 'axios',
                    'js-cookie': 'Cookies',
                    'framer-motion': 'Framer',
                    polished: 'Polished',
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
})
