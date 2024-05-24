import { PropsWithChildren, forwardRef } from 'react'

// Styling
import { Layout } from './SelectMobileDropdown.styled'

// Data
import { useSelectContext } from '@/components/form/molecules/Selects/Select/provider'

// Components
import { MobileModal } from '@/components/common/molecules'
import { OptionList } from '@/form/atoms/OptionList'

export const SelectMobileDropdown = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    ref,
) {
    const { dropdown } = useSelectContext()

    return (
        <MobileModal ref={ref} active={dropdown.active} close={dropdown.close} {...rest}>
            <Layout.Root>
                <OptionList>{children}</OptionList>
            </Layout.Root>
        </MobileModal>
    )
})
