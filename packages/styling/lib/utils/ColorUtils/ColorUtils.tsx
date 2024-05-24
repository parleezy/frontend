export class ColorUtils {
    addOpacity(hex: string, opacity: number) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b
        })

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

        if (result) {
            return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})`
        }

        return null
    }

    generateGradient(color1: string, color2: string, deg: string) {
        return `linear-gradient(${deg}, ${color1}, ${color2})`
    }
}

export const Color = new ColorUtils()
