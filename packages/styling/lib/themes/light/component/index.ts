import { Component, component } from '@/shared/component'

// Dark
import { lightSocialButton } from './social-button/index'
import { lightButton } from './button/index'

export const lightComponent: Component = {
    ...component,
    button: {
        ...lightButton,
    },
    social_button: {
        ...lightSocialButton,
    },
}
