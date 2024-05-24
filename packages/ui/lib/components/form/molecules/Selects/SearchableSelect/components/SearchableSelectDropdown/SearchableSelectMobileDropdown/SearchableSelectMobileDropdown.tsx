import { PropsWithChildren, forwardRef, useEffect, useRef } from 'react'

// Styling
import { Layout } from './SearchableSelectMobileDropdown.styled'

// Context
import { useSearchableSelectContext } from '@/components/form/molecules/Selects/SearchableSelect/provider'

// Components
import { MobileModal } from '@/components/common/molecules'
import { OptionList } from '@/components/form/atoms'

export const SearchableSelectMobileDropdown = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    ref,
) {
    const { config, dropdown, filter } = useSearchableSelectContext()

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
                <OptionList>{children}</OptionList>

                <Layout.Container>
                    <Layout.Input
                        ref={inputRef}
                        placeholder={config.text.header.placeholder}
                        type="text"
                        value={filter.term}
                        onChange={(e) => filter.setTerm(e.target.value)}
                    />
                </Layout.Container>
            </Layout.Root>
        </MobileModal>
    )
})
