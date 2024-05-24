import { Layout, Text } from './FrequentlyAskedQuestionsHeader.styled'

export interface FrequentlyAskedQuestionsHeaderProps {
    center?: boolean
    heading: string
    subheading?: string
    supporting: string
}

export function FrequentlyAskedQuestionsHeader({
    center = false,
    heading,
    subheading,
    supporting,
    ...rest
}: FrequentlyAskedQuestionsHeaderProps) {
    return (
        <Layout.Root $center={center} {...rest}>
            {subheading && (
                <Text.Subheading color="success" weight="semibold">
                    {subheading}
                </Text.Subheading>
            )}
            <Text.Heading>{heading}</Text.Heading>
            <Text.Supporting color="secondary">{supporting}</Text.Supporting>
        </Layout.Root>
    )
}
