export const FontColorType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary',
    INHERIT: 'inherit',
    ERROR: 'error',
    WARNING: 'warning',
    SUCCESS: 'success',
} as const

export type FontColorType = (typeof FontColorType)[keyof typeof FontColorType]
