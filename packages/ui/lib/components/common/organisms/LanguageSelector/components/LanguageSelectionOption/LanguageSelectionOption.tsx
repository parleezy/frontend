import { forwardRef } from 'react'
import { CircleFlag } from 'react-circle-flags'

// Packages
import { CheckCircleIcon } from '@parleezy/icons'

// Styling
import { Layout } from './LanguageSelectionOption.styled'

// Types
import { LanguageKeyType } from '@/common/organisms/LanguageSelector/provider'

// Components
import { P } from '@/typography/index'

export interface LanguageSelectionOptionProps {
    lang: LanguageKeyType
    selected: boolean
}

export const LanguageSelectionOption = forwardRef<HTMLButtonElement, LanguageSelectionOptionProps>(function Base(
    { lang, selected, ...rest },
    ref,
) {
    return (
        <Layout.Root {...rest} ref={ref} $selected={false}>
            <Layout.Leading>
                <CircleFlag countryCode={lang} />
            </Layout.Leading>

            <Layout.Content>
                <P>English</P>
            </Layout.Content>

            {selected && (
                <Layout.Trailing>
                    <CheckCircleIcon />
                </Layout.Trailing>
            )}
        </Layout.Root>
    )
})
