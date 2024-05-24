import { PropsWithChildren, forwardRef, useEffect, useRef } from 'react'

// Components
import { MobileModal } from '@/components/common/molecules'
import { OptionList } from '@/components/form/atoms'
import { MultiSelectFilter } from '../MultiSelectFilter'
import { MultiSelectToolbar } from '../MultiSelectToolbar'

// Styling
import { Layout } from './MultiSelectMobileDropdown.styled'

// Providers
import { useMultiSelectContext } from '@/form/molecules/Selects/MultiSelect/provider'

export const MultiSelectMobileDropdown = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    ref,
) {
    const { dropdown } = useMultiSelectContext()

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (dropdown.active) {
            setTimeout(() => {
                inputRef.current?.focus()
            }, 0)
        } else {
            inputRef.current?.blur()
        }
    }, [dropdown.active])

    return (
        <MobileModal ref={ref} active={dropdown.active} close={dropdown.close} {...rest}>
            <Layout.Root>
                <MultiSelectToolbar />

                <OptionList>{children}</OptionList>

                <Layout.Container>
                    <MultiSelectFilter />
                </Layout.Container>
            </Layout.Root>
        </MobileModal>
    )
})
