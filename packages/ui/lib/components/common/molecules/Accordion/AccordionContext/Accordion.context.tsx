import { createContext } from 'react'

// Types
import { AccordionVariantType } from './AccordionVariant.type'
import { AccordionInterface } from './Accordion.interface'

export const AccordionContext = createContext<AccordionInterface>({
    focused: false,
    items: [],
    open: [],
    variant: AccordionVariantType.CARD,
    toggle: () => null,
})
