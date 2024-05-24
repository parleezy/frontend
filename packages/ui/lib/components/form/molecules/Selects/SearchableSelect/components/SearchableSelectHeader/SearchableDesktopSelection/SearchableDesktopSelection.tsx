import { forwardRef, useEffect } from 'react'

// Packages
import { ChevronDownIcon, ChevronUpIcon, CloseIcon, SearchMdIcon } from '@parleezy/icons'

// Styling
import { Layout } from './SearchableDesktopSelection.styled'

// Types
import { OptionInterface } from '@/components/form/atoms'

// Data
import { useSearchableSelectContext } from '@/form/molecules/Selects/SearchableSelect/provider'
import { Span } from '@/components/typography'

export interface SearchableDesktopSelectionProps {
    option?: OptionInterface | null
}

export const SearchableDesktopSelection = forwardRef<HTMLDivElement, SearchableDesktopSelectionProps>(function Base(
    { ...rest },
    ref,
) {
    const { config, data, dropdown, filter, refs } = useSearchableSelectContext()

    const handleClick = () => {
        if (data.selected) {
            data.clear()
            setTimeout(() => dropdown.open(), 0)

            return
        }

        return dropdown.active ? dropdown.close() : dropdown.open()
    }

    useEffect(() => {
        if (dropdown.active) {
            setTimeout(() => {
                refs.inputRef.current?.focus()
            }, 0)
        } else {
            refs.inputRef.current?.blur()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dropdown.active])

    return (
        <Layout.Root {...rest} ref={ref} $active={dropdown.active} $below={dropdown.below}>
            {data.selected ? (
                <>
                    <Layout.Content onClick={handleClick}>
                        {data.selected?.leading && <Layout.Leading>{data.selected.leading}</Layout.Leading>}
                        <Span>{data.selected?.label || config.text.header.placeholder}</Span>
                        {data.selected?.trailing && <Layout.Leading>{data.selected.trailing}</Layout.Leading>}
                    </Layout.Content>

                    <Layout.Icon onClick={handleClick}>
                        <CloseIcon size="18px" />
                    </Layout.Icon>
                </>
            ) : (
                <>
                    <Layout.Icon onClick={dropdown.open}>
                        <SearchMdIcon size="18px" />
                    </Layout.Icon>

                    <Layout.Input
                        ref={refs.inputRef}
                        placeholder={config.text.header.placeholder}
                        type="text"
                        value={filter.term}
                        onChange={(e) => filter.setTerm(e.target.value)}
                        onFocus={() => dropdown.open()}
                    />

                    <Layout.Icon onClick={dropdown.open}>
                        {dropdown.active ? <ChevronUpIcon size="20px" /> : <ChevronDownIcon size="20px" />}
                    </Layout.Icon>
                </>
            )}
        </Layout.Root>
    )
})
