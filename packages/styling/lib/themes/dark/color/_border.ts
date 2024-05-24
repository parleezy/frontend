import { BorderColor } from '@/shared'

export const borderColor: BorderColor = {
    primary: {
        base: '#D0D5DD',
        hover: '#D0D5DD',
    },
    secondary: {
        base: '#EAECF0',
        hover: '#EAECF0',
    },
    tertiary: {
        base: '#F2F4F7',
        hover: '#F2F4F7',
    },
    inherit: {
        base: 'inherit',
        hover: 'inherit',
    },
    error: {
        base: '#FDA29B',
        hover: '#FDA29B',
    },
    error_solid: {
        base: '#D92D20',
        hover: '#D92D20',
    },
} as const
