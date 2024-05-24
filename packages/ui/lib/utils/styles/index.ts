import { AnimationStyles } from './_animation.style'
import { ComponentStyles } from './components'
import { FormStyles } from './_form.style'
import { TypographyStyles } from './_typography.style'

export class StyleService {
    public Animation = new AnimationStyles()
    public Component = new ComponentStyles()
    public Form = new FormStyles()
    public Typography = new TypographyStyles()
}

export const Style = new StyleService()
