import { Button, button } from '@/shared/component/button'

// Color
import { lightButtonColor } from './_color'

export const lightButton: Button = {
    ...button,
    color: {
        ...button.color,
        ...lightButtonColor,
    },
}
