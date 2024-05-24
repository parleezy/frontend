import { forwardRef } from 'react'

// Styling
import { Layout } from './CheckboxOption.styled'

// Components
import { Checkbox } from '@/common/atoms'
import { P } from '@/typography/P'

// Types
import { CheckboxRadiusType, CheckboxSizeType } from '@/types/components'
import { OptionInterface } from '@/components/form/atoms/Option'

export interface CheckboxOptionProps {
    option: OptionInterface
    selected: boolean
    onClick: () => void
    config?: {
        radius?: CheckboxRadiusType
        size?: CheckboxSizeType
    }
}

export const CheckboxOption = forwardRef<HTMLDivElement, CheckboxOptionProps>(function Base(
    { option, selected, onClick, config = {}, ...rest },
    ref,
) {
    const { radius = CheckboxRadiusType.SM, size = CheckboxSizeType.SM } = config

    return (
        <Layout.Root {...rest} ref={ref}>
            <Checkbox
                checked={selected}
                disabled={false}
                id={option.value}
                radius={radius}
                size={size}
                onChange={onClick}
            >
                <Layout.Content>
                    <P size="SM" weight="medium">
                        {option.label}
                    </P>
                    {option.text && (
                        <P color="tertiary" size="XS">
                            {option.text}
                        </P>
                    )}
                </Layout.Content>
            </Checkbox>
        </Layout.Root>
    )
})
