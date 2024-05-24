import { useContext } from 'react'
import { AccordionContext } from './Accordion.context'

export function useAccordionContext() {
    return useContext(AccordionContext)
}
