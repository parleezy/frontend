interface BorderColorProps {
    base: string
    hover: string
}

export interface BorderColor {
    primary: BorderColorProps
    secondary: BorderColorProps
    tertiary: BorderColorProps
    inherit: BorderColorProps
    error: BorderColorProps
    error_solid: BorderColorProps
}

export const borderColor: BorderColor = {
    primary: {
        base: '',
        hover: '',
    },
    secondary: {
        base: '',
        hover: '',
    },
    tertiary: {
        base: '',
        hover: '',
    },
    inherit: {
        base: 'inherit',
        hover: 'inherit',
    },
    error: {
        base: '',
        hover: '',
    },
    error_solid: {
        base: '',
        hover: '',
    },
} as const
