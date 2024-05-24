// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

class IconGenerator {
    constructor(inputDir, outputDir) {
        this._input = inputDir
        this._output = outputDir
    }

    // Ensures the output directory exists
    ensureOutputDir(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }
    }

    svgToComponentName(svgName) {
        return (
            svgName.charAt(0).toUpperCase() +
            svgName.slice(1).replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase()) +
            'Icon'
        )
    }

    template(name, content) {
        return `
            import { forwardRef } from 'react'

            // Types
            import { IconPropsInterface } from '@/lib/types'

            export const ${name} = forwardRef<SVGSVGElement, IconPropsInterface>(function Base(
                { color = 'currentColor', size = '24' },
                ref,
            ): JSX.Element {
                return (
                    ${content}
                )
            })
        `
    }

    // Generates a React component from an SVG file
    generateComponent(svgPath, outputPath, componentName) {
        let svgContent = fs.readFileSync(svgPath, 'utf-8')

        svgContent = svgContent
            .replace(`stroke="black"`, 'stroke={color}')
            .replace('<svg ', '<svg ref={ref} ')
            .replace(/(<svg[^>]*)(width="24")([^>]*)(height="24")/, '$1width={size}$3height={size}')

        fs.writeFileSync(
            `${outputPath}/${componentName.replace('Icon', '')}.icon.tsx`,
            this.template(componentName, svgContent),
        )
    }

    // Generates index.ts files to export all components in a directory
    generateIndexFile(dir) {
        const files = fs.readdirSync(dir)
        const exports = files
            .filter((file) => file.endsWith('.icon.tsx'))
            .map((file) => {
                const componentName = path.basename(file, '.tsx')

                return `export * from './${componentName}';`
            })
            .join('\n')

        fs.writeFileSync(`${dir}/index.ts`, exports)
    }

    // Recursively processes directories and files
    processDirectory(currentDir, outputDir) {
        this.ensureOutputDir(outputDir)
        const entries = fs.readdirSync(currentDir, { withFileTypes: true })

        entries.forEach((entry) => {
            const absolutePath = path.join(currentDir, entry.name)

            if (entry.isDirectory()) {
                // Process subdirectory
                this.processDirectory(absolutePath, path.join(outputDir, entry.name))
            } else if (entry.isFile() && path.extname(entry.name) === '.svg') {
                // Process SVG file
                const componentName = this.svgToComponentName(path.basename(entry.name, '.svg'))
                this.generateComponent(absolutePath, outputDir, componentName)
            }
        })

        this.generateIndexFile(outputDir)
    }

    // New method to generate a root index.ts for all subdirectories
    generateRootIndex() {
        const directories = fs
            .readdirSync(this._output, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name)

        const exportStatements = directories.map((dir) => `export * as ${dir} from './${dir}';`).join('\n')

        fs.writeFileSync(path.join(this._output, 'index.ts'), exportStatements)
    }

    generate() {
        this.processDirectory(this._input, this._output)
        this.generateRootIndex()
    }
}

module.exports = IconGenerator
