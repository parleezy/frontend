export const CloseButtonSizeType = {
    SM: 'SM',
    MD: 'MD',
    LG: 'LG',
} as const

export type CloseButtonSizeType = (typeof CloseButtonSizeType)[keyof typeof CloseButtonSizeType]
