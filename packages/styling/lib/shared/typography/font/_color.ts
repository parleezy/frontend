export interface FontColor {
    primary: string
    secondary: string
    tertiary: string
    inherit: string
    error: string
    warning: string
    success: string
}

export const fontColor: FontColor = {
    primary: '',
    secondary: '',
    tertiary: '',
    error: '',
    warning: '',
    success: '',
    inherit: 'inherit',
} as const
