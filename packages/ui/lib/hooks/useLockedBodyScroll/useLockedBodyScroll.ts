import { useLayoutEffect } from 'react'

export function useLockedBodyScroll(): void {
    useLayoutEffect(() => {
        const originalStyle = document.body.style.overflow

        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = originalStyle
        }
    }, [])
}
