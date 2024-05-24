import { I18nextProvider } from 'react-i18next'
import { PropsWithChildren } from 'react'

import i18n from './i18next.config'

export function Provider({ children }: PropsWithChildren) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
