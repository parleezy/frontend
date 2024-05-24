import { renderHook, act } from '@/test/index'

import { useTimeout } from './useTimeout'

describe('useTimeout', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('executes the callback after the specified delay', () => {
        const callback = vi.fn()

        renderHook(() => useTimeout(callback, 1000))

        expect(callback).not.toHaveBeenCalled()

        act(() => {
            vi.runAllTimers()
        })

        expect(callback).toHaveBeenCalledTimes(1)
    })

    it('does not execute the callback if the delay is null', () => {
        const callback = vi.fn()

        renderHook(() => useTimeout(callback, null))

        act(() => {
            vi.runAllTimers()
        })

        expect(callback).not.toHaveBeenCalled()
    })

    it('does not execute the callback if the delay is undefined', () => {
        const callback = vi.fn()

        renderHook(() => useTimeout(callback, undefined))

        act(() => {
            vi.runAllTimers()
        })

        expect(callback).not.toHaveBeenCalled()
    })

    it('resets the timer when delay changes', () => {
        const callback = vi.fn()

        const { rerender } = renderHook(({ delay }) => useTimeout(callback, delay), {
            initialProps: { delay: 500 },
        })

        rerender({ delay: 1000 })

        act(() => {
            vi.advanceTimersByTime(500)
        })

        expect(callback).not.toHaveBeenCalled()

        act(() => {
            vi.advanceTimersByTime(500)
        })

        expect(callback).toHaveBeenCalledTimes(1)
    })

    it('clears the timer on unmount', () => {
        const callback = vi.fn()

        const { unmount } = renderHook(() => useTimeout(callback, 1000))

        unmount()

        act(() => {
            vi.runAllTimers()
        })

        expect(callback).not.toHaveBeenCalled()
    })
})
