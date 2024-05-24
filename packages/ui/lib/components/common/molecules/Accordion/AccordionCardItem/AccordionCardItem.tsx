import { forwardRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from 'styled-components'

// Packages
import { MinusCircleIcon, PlusCircleIcon } from '@parleezy/icons'
import { ThemeInterface } from '@parleezy/styling'

// Styling
import { Layout, Text } from './AccordionCardItem.styled'

// Types
import { AccordionItemInterface } from '@/components/index'

export interface AccordionCardItemProps {
    id: string
    item: AccordionItemInterface
    open: boolean
    onClick: () => void
}

export const AccordionCardItem = forwardRef<HTMLDivElement, AccordionCardItemProps>(function Base(
    { id, item, open, onClick, ...rest },
    ref,
) {
    const theme: ThemeInterface = useTheme()

    return (
        <Layout.Root {...rest} ref={ref} $open={open}>
            <Layout.Trigger onClick={onClick}>
                <Layout.Icon onClick={onClick}>{open ? <MinusCircleIcon /> : <PlusCircleIcon />}</Layout.Icon>

                <Text.Title weight="medium">{item.title}</Text.Title>
            </Layout.Trigger>

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
