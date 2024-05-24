import { renderHook } from '@/test/index'

import { useLockedBodyScroll } from './useLockedBodyScroll'

describe('useLockedBodyScroll', () => {
    let originalOverflow: string

    beforeEach(() => {
        originalOverflow = document.body.style.overflow
    })

    afterEach(() => {
        document.body.style.overflow = originalOverflow
    })

    it('locks body scroll on mount', () => {
        renderHook(() => useLockedBodyScroll())

        expect(document.body.style.overflow).toBe('hidden')
    })

    it('restores original body overflow style on unmount', () => {
        const { unmount } = renderHook(() => useLockedBodyScroll())

        unmount()
        expect(document.body.style.overflow).toBe(originalOverflow)
    })
})
