interface ButtonColorProps {
    background: {
        base: string
        hover: string
        disabled: string
    }
    border: {
        base: string
        hover: string
        disabled: string
    }
    text: {
        base: string
        hover: string
        disabled: string
    }
}

export interface ButtonColor {
    primary: ButtonColorProps
    secondary_color: ButtonColorProps
    secondary_grey: ButtonColorProps
    tertiary_color: ButtonColorProps
    tertiary_grey: ButtonColorProps
    destructive_primary: ButtonColorProps
    destructive_secondary: ButtonColorProps
    destructive_tertiary: ButtonColorProps
}

export const buttonColor: ButtonColor = {
    primary: {
        background: {
            base: '',
            hover: '',
            disabled: '',
        },
        border: {
            base: '',
            hover: '',
            disabled: '',
        },
        text: {
            base: '',
            hover: '',
            disabled: '',
        },
    },
    secondary_color: {
        background: {
            base: '',
            hover: '',
            disabled: '',
        },
        border: {
            base: '',
            hover: '',
            disabled: '',
        },
        text: {
            base: '',
            hover: '',
            disabled: '',
        },
    },
    secondary_grey: {
        background: {
            base: '',
            hover: '',
            disabled: '',
        },
        border: {
            base: '',
            hover: '',
            disabled: '',
        },
        text: {
            base: '',
            hover: '',
            disabled: '',
        },
    },
    tertiary_color: {
        background: {
            base: '',
            hover: '',
            disabled: '',
        },
        border: {
            base: 'transparent',
            hover: 'transparent',
            disabled: 'transparent',
        },
        text: {
            base: '',
            hover: '',
            disabled: '',
        },
    },
    tertiary_grey: {
        background: {
            base: '',
            hover: '',
            disabled: '',
        },
        border: {
            base: 'transparent',
            hover: 'transparent',
            disabled: 'transparent',
        },
        text: {
            base: '',
            hover: '',
            disabled: '',
        },
    },
    destructive_primary: {
        background: {
            base: '',
            hover: '',
            disabled: '',
        },
        border: {
            base: '',
            hover: '',
            disabled: '',
        },
        text: {
            base: '',
            hover: '',
            disabled: '',
        },
    },
    destructive_secondary: {
        background: {
            base: '',
            hover: '',
            disabled: '',
        },
        border: {
            base: '',
            hover: '',
            disabled: '',
        },
        text: {
            base: '',
            hover: '',
            disabled: '',
        },
    },
    destructive_tertiary: {
        background: {
            base: '',
            hover: '',
            disabled: '',
        },
        border: {
            base: 'transparent',
            hover: 'transparent',
            disabled: 'transparent',
        },
        text: {
            base: '',
            hover: '',
            disabled: '',
        },
    },
}
