import { BackgroundColor } from '@/shared'

export const backgroundColor: BackgroundColor = {
    primary: {
        base: '#FFF',
        hover: '#F9FAFB',
    },
    secondary: {
        base: '#F9FAFB',
        hover: '#F2F4F7',
    },
    disabled: {
        base: '#F2F4F7',
        hover: '#F2F4F7',
    },
    inherit: {
        base: 'inherit',
        hover: 'inherit',
    },
} as const
