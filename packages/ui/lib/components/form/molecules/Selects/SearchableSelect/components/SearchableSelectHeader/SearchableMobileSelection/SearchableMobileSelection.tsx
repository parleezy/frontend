import { forwardRef } from 'react'

// Packages
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from '@parleezy/icons'

// Styling
import { Layout } from './SearchableMobileSelection.styled'

// Types
import { OptionInterface } from '@/components/form/atoms'

// Data
import { useSearchableSelectContext } from '@/form/molecules/Selects/SearchableSelect/provider'

// Components
import { Span } from '@/components/typography'

export interface SearchableMobileSelectionProps {
    option?: OptionInterface | null
}

export const SearchableMobileSelection = forwardRef<HTMLButtonElement, SearchableMobileSelectionProps>(function Base(
    { ...rest },
    ref,
) {
    const { config, data, dropdown } = useSearchableSelectContext()

    const handleClick = () => {
        if (data.selected) {
            data.clear()

            setTimeout(() => {
                dropdown.open()
            }, 0)

            return
        }

        return dropdown.active ? dropdown.close() : dropdown.open()
    }

    return (
        <Layout.Root
            {...rest}
            ref={ref}
            $active={dropdown.active}
            $below={dropdown.below}
            type="button"
            onClick={handleClick}
        >
            <Layout.Content>
                {data.selected?.leading && <Layout.Leading>{data.selected.leading}</Layout.Leading>}
                <Span>{data.selected?.label || config.text.header.placeholder}</Span>
                {data.selected?.trailing && <Layout.Leading>{data.selected.trailing}</Layout.Leading>}
            </Layout.Content>

            {data.selected ? (
                <Layout.Icon>
                    <CloseIcon size="18px" />
                </Layout.Icon>
            ) : (
                <Layout.Icon>
                    {dropdown.active ? <ChevronUpIcon size="20px" /> : <ChevronDownIcon size="20px" />}
                </Layout.Icon>
            )}
        </Layout.Root>
    )
})
