interface BadgeColorProps {
    background: string
    border: string
    text: string
}

export interface BadgeColor {
    brand: BadgeColorProps
    error: BadgeColorProps
    grey: BadgeColorProps
    success: BadgeColorProps
    warning: BadgeColorProps
}

export const badgeColor: BadgeColor = {
    brand: {
        background: '#F9F5FF',
        border: '#E9D7FE',
        text: '#6941C6',
    },
    error: {
        background: '#FEF3F2',
        border: '#FECDCA',
        text: '#B42318',
    },
    grey: {
        background: '#F9FAFB',
        border: '#EAECF0',
        text: '#344054',
    },
    success: {
        background: '#ECFDF3',
        border: '#ABEFC6',
        text: '#067647',
    },
    warning: {
        background: '#FFFAEB',
        border: '#FEDF89',
        text: '#B54708',
    },
}
