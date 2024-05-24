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
    base: './',
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
            name: `${process.env.PACKAGE_NAME} library`,
            formats: ['es', 'umd'],
            fileName: (format) => `${process.env.PACKAGE_NAME}.${format}.js`,
        },
        rollupOptions: {
            external: [
                'framer-motion',
                'polished',
                'react-div-100vh',
                'react',
                'react-circle-flags',
                'react-dom',
                'styled-components',
            ],
            output: {
                globals: {
                    'framer-motion': 'Framer',
                    polished: 'polished',
                    react: 'React',
                    'react-circle-flags': 'reactCircleFlags',
                    'react-div-100vh': 'Div100vh',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
})
