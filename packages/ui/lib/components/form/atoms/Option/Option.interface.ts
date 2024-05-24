import { ReactNode } from 'react'

export interface OptionInterface {
    value: string
    label: string
    text?: string
    leading?: ReactNode
    trailing?: ReactNode
}
