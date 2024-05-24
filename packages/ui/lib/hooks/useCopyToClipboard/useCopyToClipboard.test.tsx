import { renderHook, act } from '@/test/index'

// Hooks
import { useCopyToClipboard } from './useCopyToClipboard'

describe('useCopyToClipboard', () => {
    let originalClipboard: typeof navigator.clipboard
    let originalExecCommand: typeof document.execCommand

    beforeEach(() => {
        vi.useFakeTimers()

        originalClipboard = navigator.clipboard
        originalExecCommand = document.execCommand
        Object.defineProperty(navigator, 'clipboard', {
            value: { writeText: vi.fn() },
            writable: true,
        })
        document.execCommand = vi.fn(() => true)
    })

    afterEach(() => {
        vi.useRealTimers()
        vi.restoreAllMocks()
        Object.defineProperty(navigator, 'clipboard', { value: originalClipboard, writable: true })
        document.execCommand = originalExecCommand
    })

    it('updates copied state when text is successfully copied', async () => {
        vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue()
        const { result } = renderHook(() => useCopyToClipboard())

        await act(async () => {
            await result.current.copyToClipboard('test')
        })

        expect(result.current.copied).toBe(true)

        act(() => {
            vi.runAllTimers()
        })

        expect(result.current.copied).toBe(false)
    })

    it('handles errors in clipboard API gracefully', async () => {
        const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {})
        vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('Failed to copy'))

        const { result } = renderHook(() => useCopyToClipboard())
        await act(async () => {
            await result.current.copyToClipboard('test')
        })

        expect(consoleErrorMock).toHaveBeenCalledWith('Failed to copy:', expect.any(Error))
        expect(result.current.copied).toBe(false)
    })
})
