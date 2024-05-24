import { renderHook, act } from '@/test/index'

// Hook
import { useComboKeyPress } from './useComboKeyPress'

describe('useComboKeyPress', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
        vi.restoreAllMocks()
    })

    it('calls action when the correct combination of keys is pressed', () => {
        const action = vi.fn()
        const keys = ['Control', 'Shift', 'K']
        const { unmount } = renderHook(() => useComboKeyPress(keys, action))

        act(() => {
            keys.forEach((key) => {
                const event = new KeyboardEvent('keydown', { key })
                document.dispatchEvent(event)
            })
        })

        expect(action).toHaveBeenCalledTimes(1)

        act(() => {
            keys.forEach((key) => {
                const event = new KeyboardEvent('keyup', { key })
                document.dispatchEvent(event)
            })
        })

        unmount()
    })

    it('does not call action when an incorrect key is pressed', () => {
        const action = vi.fn()
        const keys = ['Control', 'Shift', 'K']
        const { unmount } = renderHook(() => useComboKeyPress(keys, action))

        act(() => {
            const wrongKeyEvent = new KeyboardEvent('keydown', { key: 'A' })
            document.dispatchEvent(wrongKeyEvent)

            keys.forEach((key) => {
                const event = new KeyboardEvent('keydown', { key })
                document.dispatchEvent(event)
            })
        })

        expect(action).not.toHaveBeenCalled()

        unmount()
    })
})
