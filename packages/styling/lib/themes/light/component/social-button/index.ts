import { SocialButton, socialButton } from '@/shared/component/social-button'

// Color
import { lightSocialButtonColor } from './_color'

export const lightSocialButton: SocialButton = {
    ...socialButton,
    color: {
        ...socialButton.color,
        ...lightSocialButtonColor,
    },
}
