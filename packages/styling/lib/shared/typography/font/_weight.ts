export interface FontWeight {
    regular: number
    medium: number
    semibold: number
    bold: number
    inherit: string
}

export const fontWeight: FontWeight = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    inherit: 'inherit',
} as const
