import { forwardRef } from 'react'

// Styling
import { Layout } from './LanguageSelectionList.styled'

// Option
import { LanguageSelectionOption } from '@/common/organisms/LanguageSelector/components'
import { LanguageKeyType } from '@/common/organisms/LanguageSelector/provider'

export const LanguageSelectionList = forwardRef<HTMLDivElement>(function Base({ ...rest }, ref) {
    return (
        <Layout.Root {...rest} ref={ref}>
            {Object.values(LanguageKeyType).map((lang) => {
                return <LanguageSelectionOption key={lang} lang={lang} selected={false} />
            })}
        </Layout.Root>
    )
})
