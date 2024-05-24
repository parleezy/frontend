export const ButtonColorType = {
    DESTRUCTIVE_PRIMARY: 'destructive_primary',
    DESTRUCTIVE_SECONDARY: 'destructive_secondary',
    DESTRUCTIVE_TERTIARY: 'destructive_tertiary',
    PRIMARY: 'primary',
    SECONDARY_COLOR: 'secondary_color',
    SECONDARY_GREY: 'secondary_grey',
    TERTIARY_COLOR: 'tertiary_color',
    TERTIARY_GREY: 'tertiary_grey',
} as const

export type ButtonColorType = (typeof ButtonColorType)[keyof typeof ButtonColorType]
