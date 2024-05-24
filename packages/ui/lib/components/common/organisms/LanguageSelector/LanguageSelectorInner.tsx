import { forwardRef } from 'react'

// Styling
import { Layout } from './LanguageSelectorInner.styled'

// Components
import { LanguageSelectionList } from './components'
import { Modal } from '@/components/index'

// Context
import { useLanguageSelectorContext } from './provider'

export const LanguageSelectorInner = forwardRef<HTMLDivElement>(function Base({ ...rest }, ref) {
    const { active, close, open } = useLanguageSelectorContext()

    return (
        <Layout.Root {...rest} ref={ref}>
            <div>
                <div>Language Selection</div>
                <button onClick={open}>Open</button>
            </div>

            <Modal active={active} close={close}>
                <LanguageSelectionList />
            </Modal>
        </Layout.Root>
    )
})
