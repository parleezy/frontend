export interface Shadow {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xl2: string
    xl3: string
}

export const shadow: Shadow = {
    xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
    md: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
    lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
    xl: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
    xl2: '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
    xl3: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
} as const
