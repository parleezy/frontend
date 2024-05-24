import { forwardRef } from 'react'

// Context
import { AccordionVariantType, AccordionItemInterface } from './AccordionContext'
import { AccordionProvider } from './AccordionContext/Accordion.provider'

// Components
import { AccordionInner } from './AccordionInner'

export interface AccordionProps {
    config?: {
        focused?: boolean
        variant?: AccordionVariantType
    }
    items: AccordionItemInterface[]
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(function Base({ config, items, ...rest }, ref) {
    return (
        <AccordionProvider config={config} items={items}>
            <AccordionInner {...rest} ref={ref} />
        </AccordionProvider>
    )
})
