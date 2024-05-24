import { AccordionItemInterface } from './AccordionItem.interface'
import { AccordionVariantType } from './AccordionVariant.type'

export interface AccordionInterface {
    focused: boolean
    items: AccordionItemInterface[]
    open: string[]
    variant: AccordionVariantType
    toggle: (id: string) => void
}
