import { AnimatePresence } from 'framer-motion'
import { PropagateLoader } from 'react-spinners'

// Components
import { Overlay, Portal } from '@/components'

// Styling
import { Layout } from './Loader.styled'

export interface LoaderProps {
    loading: boolean
    color?: string
}

export function Loader({ loading, color = '#434343' }: LoaderProps) {
    return (
        <AnimatePresence>
            {loading && (
                <Portal>
                    <Overlay />

                    <Layout.Root>
                        <PropagateLoader color={color} size={10} speedMultiplier={0.8} />
                    </Layout.Root>
                </Portal>
            )}
        </AnimatePresence>
    )
}
