import { SocialButton, socialButton } from '@/shared/component/social-button'

// Color
import { darkSocialButtonColor } from './_color'

export const darkSocialButton: SocialButton = {
    ...socialButton,
    color: {
        ...socialButton.color,
        ...darkSocialButtonColor,
    },
}
