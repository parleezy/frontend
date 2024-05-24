import { useTheme } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { forwardRef } from 'react'

// Packages
import { MinusCircleIcon, PlusCircleIcon } from '@parleezy/icons'
import { ThemeInterface } from '@parleezy/styling'

// Styling
import { Layout, Trigger, Text } from './AccordionListItem.styled'

// Types
import { AccordionItemInterface } from '@/common/molecules/Accordion/AccordionContext'

export interface AccordionListItemProps {
    id: string
    item: AccordionItemInterface
    open: boolean
    onClick: () => void
}

export const AccordionListItem = forwardRef<HTMLDivElement, AccordionListItemProps>(function Base(
    { id, item, open, onClick, ...rest },
    ref,
) {
    const theme: ThemeInterface = useTheme()

    return (
        <Layout.Root {...rest} ref={ref}>
            <Trigger.Container onClick={onClick}>
                <Text.Title weight="medium">{item.title}</Text.Title>

                <Trigger.Icon>{open ? <MinusCircleIcon /> : <PlusCircleIcon />}</Trigger.Icon>
            </Trigger.Container>

            <AnimatePresence>
                {open && (
                    <Layout.Content
                        key={`faq-${id}-content`}
                        animate="visible"
                        exit="exit"
                        initial="hidden"
                        transition={theme.animation.framer.transition.accordion.primary}
                        variants={theme.animation.framer.variant.accordion.primary}
                    >
                        <Text.Supporting color="tertiary">{item.text}</Text.Supporting>
                    </Layout.Content>
                )}
            </AnimatePresence>
        </Layout.Root>
    )
})
