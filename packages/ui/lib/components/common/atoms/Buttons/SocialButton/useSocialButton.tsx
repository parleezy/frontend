import { AppleIcon, FacebookIcon, GoogleIcon, XIcon } from '@parleezy/icons'

// Type
import { SocialButtonBrandType } from '@/types/components'

export function useSocialButton() {
    const icon = (brand: SocialButtonBrandType, size: string) => {
        switch (brand) {
            case SocialButtonBrandType.APPLE:
                return <AppleIcon size={size} />
            case SocialButtonBrandType.FACEBOOK:
                return <FacebookIcon size={size} />
            case SocialButtonBrandType.GOOGLE:
                return <GoogleIcon size={size} />
            case SocialButtonBrandType.X:
                return <XIcon size={size} />
            default:
                return <></>
        }
    }

    const text = (brand: SocialButtonBrandType) => {
        switch (brand) {
            case SocialButtonBrandType.APPLE:
                return `Sign in with Apple`
            case SocialButtonBrandType.FACEBOOK:
                return `Sign in with Facebook`
            case SocialButtonBrandType.GOOGLE:
                return `Sign in with Google`
            case SocialButtonBrandType.X:
                return `Sign in with X`
            default:
                return ``
        }
    }

    return {
        icon,
        text,
    }
}
