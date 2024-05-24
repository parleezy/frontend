import { PropsWithChildren } from 'react'

// Components
import { MobileModal, DesktopModal } from '@/components/index'

// Hooks
import { useWindowSize } from '@/hooks/useWindowSize'

export interface ModalInnerProps {
    active: boolean
    dynamic?: boolean
    close: () => void
}

export function Modal({ active, dynamic = true, close, children }: PropsWithChildren<ModalInnerProps>) {
    const screen = useWindowSize()

    const isMobile = (): boolean => screen?.width < 768

    if (!dynamic) {
        return (
            <DesktopModal active={active} close={close}>
                {children}
            </DesktopModal>
        )
    }

    return (
        <>
            {isMobile() ? (
                <MobileModal active={active} close={close}>
                    {children}
                </MobileModal>
            ) : (
                <DesktopModal active={active} close={close}>
                    {children}
                </DesktopModal>
            )}
        </>
    )
}
