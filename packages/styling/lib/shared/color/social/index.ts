import { appleSocialColor } from './_apple'
import { facebookSocialColor } from './_facebook'
import { googleSocialColor } from './_google'
import { xSocialColor } from './_x'

export interface SocialColor {
    apple: SocialColorProps
    facebook: SocialColorProps
    google: SocialColorProps
    x: SocialColorProps
}

export const socialColor: SocialColor = {
    apple: appleSocialColor,
    facebook: facebookSocialColor,
    google: googleSocialColor,
    x: xSocialColor,
}

export interface SocialColorProps {
    background: {
        base: string
        hover: string
    }
    border: {
        base: string
        hover: string
    }
    text: {
        base: string
        hover: string
    }
}
