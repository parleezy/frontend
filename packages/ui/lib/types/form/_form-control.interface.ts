import { FormControlType } from './_form-control.type'

export interface FormControlInterface {
    id: string
    name: string
    label?: string
    placeholder?: string
    type: FormControlType
}
