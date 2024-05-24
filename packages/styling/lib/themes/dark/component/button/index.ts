import { Button, button } from '@/shared/component/button'

// Color
import { darkButtonColor } from './_color'

export const darkButton: Button = {
    ...button,
    color: {
        ...button.color,
        ...darkButtonColor,
    },
}
