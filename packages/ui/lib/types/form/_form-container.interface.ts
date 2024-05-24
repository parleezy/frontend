import { FormContainerType } from './_form-container.type'
import { FormControlInterface } from './_form-control.interface'

export interface FormContainerInterface {
    id: string
    container: FormContainerType
    controls: FormControlInterface[]
}
