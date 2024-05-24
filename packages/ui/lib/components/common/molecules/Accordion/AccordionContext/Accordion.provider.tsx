import { PropsWithChildren, useState } from 'react'

// Context
import { AccordionContext } from './Accordion.context'

// Types
import { AccordionVariantType } from './AccordionVariant.type'
import { AccordionItemInterface } from './AccordionItem.interface'

function useAccordion(config: { focused: boolean; variant: AccordionVariantType }, items: AccordionItemInterface[]) {
    const { focused, variant } = config
    const [open, setOpen] = useState<string[]>([])

    const toggle = (id: string): void => {
        if (focused) {
            open.includes(id) ? setOpen([]) : setOpen([id])
        } else {
            open.includes(id) ? setOpen((state) => state.filter((i) => i !== id)) : setOpen([...open, id])
        }
    }

    return {
        focused,
        items,
        open,
        variant,
        toggle,
    }
}

interface Props {
    config?: {
        focused?: boolean
        variant?: AccordionVariantType
    }
    items: AccordionItemInterface[]
}

export function AccordionProvider({ config = {}, items, children }: PropsWithChildren<Props>) {
    const { focused = false, variant = AccordionVariantType.LIST } = config

    return (
        <AccordionContext.Provider value={useAccordion({ focused, variant }, items)}>
            {children}
        </AccordionContext.Provider>
    )
}
