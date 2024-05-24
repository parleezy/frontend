import { forwardRef } from 'react'

// Styling
import { Layout } from './AccordionInner.styled'

// Components
import { AccordionCardItem } from '@/common/molecules/Accordion/AccordionCardItem'
import { AccordionListItem } from '@/common/molecules/Accordion/AccordionListItem'

// Context
import { AccordionVariantType, useAccordionContext } from '../AccordionContext'

export const AccordionInner = forwardRef<HTMLDivElement>(function Base({ ...rest }, ref) {
    const { items, open, variant, toggle } = useAccordionContext()

    return (
        <Layout.Root {...rest} ref={ref}>
            {items.map((item, id) => {
                return variant === AccordionVariantType.CARD ? (
                    <AccordionCardItem
                        key={id}
                        id={id.toString()}
                        item={item}
                        open={open.includes(id.toString())}
                        onClick={() => toggle(id.toString())}
                    />
                ) : (
                    <AccordionListItem
                        key={id}
                        id={id.toString()}
                        item={item}
                        open={open.includes(id.toString())}
                        onClick={() => toggle(id.toString())}
                    />
                )
            })}

            {}
        </Layout.Root>
    )
})
