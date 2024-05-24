import { renderHook } from '@/test/index'

// Hook
import { useCreateDomElement } from './useCreateDomElement'

describe('useCreateDomElement', () => {
    beforeEach(() => {
        document.body.innerHTML = ''
    })

    afterEach(() => {
        document.body.innerHTML = ''
    })

    it('creates a new DOM element and appends it to the body', () => {
        const { result } = renderHook(() => useCreateDomElement())

        expect(result.current).toBeInstanceOf(HTMLDivElement)
        expect(document.body.lastChild).toBe(result.current)
        expect(result.current?.id).toBe('custom-div-element')
    })

    it('removes the element on unmount', async () => {
        const { result, unmount } = renderHook(() => useCreateDomElement())

        const createdElement = result.current
        expect(document.body.contains(createdElement)).toBe(true)

        unmount()

        expect(document.body.contains(createdElement)).toBe(false)
    })
})
