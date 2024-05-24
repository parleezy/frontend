import { renderHook, act } from '@/test/index'

// Hook
import { useElementCoordinates, ElementCoordinates } from './useElementCoordinates'

interface ResizeObserverEntry {
    target: Element
    contentRect: DOMRectReadOnly
    borderBoxSize?: ReadonlyArray<ResizeObserverSize>
    contentBoxSize?: ReadonlyArray<ResizeObserverSize>
    devicePixelContentBoxSize?: ReadonlyArray<ResizeObserverSize>
}

type ResizeObserverCallback = (entries: ResizeObserverEntry[], observer: ResizeObserver) => void

class MockResizeObserver {
    private callback: ResizeObserverCallback

    constructor(callback: ResizeObserverCallback) {
        this.callback = callback
    }

    observe() {
        const entries: ResizeObserverEntry[] = [
            {
                target: document.documentElement,
                contentRect: {
                    x: 0,
                    y: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    top: 0,
                    right: window.innerWidth,
                    bottom: window.innerHeight,
                    left: 0,
                    toJSON: () => ({}),
                },
                borderBoxSize: [],
                contentBoxSize: [],
                devicePixelContentBoxSize: [],
            },
        ]
        this.callback(entries, this)
    }

    unobserve() {}

    disconnect() {}
}

// Ensure the mock matches the expected type
global.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver

describe('useElementCoordinates', () => {
    const mockRef = {
        current: {
            getBoundingClientRect: vi.fn(),
        },
    } as unknown as React.RefObject<HTMLElement>

    beforeEach(() => {
        if (mockRef.current) {
            ;(mockRef.current.getBoundingClientRect as ReturnType<typeof vi.fn>).mockClear()
        }
    })

    it('should return correct coordinates when the ref element is set', () => {
        if (mockRef.current) {
            ;(mockRef.current.getBoundingClientRect as ReturnType<typeof vi.fn>).mockReturnValue({
                top: 10,
                left: 20,
                bottom: 110,
                right: 220,
                width: 200,
                height: 100,
            })
        }

        const { result } = renderHook(() => useElementCoordinates(mockRef))

        act(() => {
            window.dispatchEvent(new Event('resize'))
        })

        expect(result.current).toEqual<ElementCoordinates>({
            topLeft: { top: 10, left: 20 },
            topRight: { top: 10, right: 220 },
            bottomLeft: { bottom: 110, left: 20 },
            bottomRight: { bottom: 110, right: 220 },
            width: 200,
            height: 100,
        })
    })

    it('should update coordinates on window resize', () => {
        if (mockRef.current) {
            ;(mockRef.current.getBoundingClientRect as ReturnType<typeof vi.fn>).mockReturnValue({
                top: 10,
                left: 20,
                bottom: 110,
                right: 220,
                width: 200,
                height: 100,
            })
        }

        const { result } = renderHook(() => useElementCoordinates(mockRef))

        act(() => {
            window.dispatchEvent(new Event('resize'))
        })

        expect(result.current).toEqual<ElementCoordinates>({
            topLeft: { top: 10, left: 20 },
            topRight: { top: 10, right: 220 },
            bottomLeft: { bottom: 110, left: 20 },
            bottomRight: { bottom: 110, right: 220 },
            width: 200,
            height: 100,
        })

        if (mockRef.current) {
            ;(mockRef.current.getBoundingClientRect as ReturnType<typeof vi.fn>).mockReturnValue({
                top: 30,
                left: 40,
                bottom: 130,
                right: 240,
                width: 200,
                height: 100,
            })
        }

        act(() => {
            window.dispatchEvent(new Event('resize'))
        })

        expect(result.current).toEqual<ElementCoordinates>({
            topLeft: { top: 30, left: 40 },
            topRight: { top: 30, right: 240 },
            bottomLeft: { bottom: 130, left: 40 },
            bottomRight: { bottom: 130, right: 240 },
            width: 200,
            height: 100,
        })
    })

    it('should update coordinates on window scroll', () => {
        if (mockRef.current) {
            ;(mockRef.current.getBoundingClientRect as ReturnType<typeof vi.fn>).mockReturnValue({
                top: 10,
                left: 20,
                bottom: 110,
                right: 220,
                width: 200,
                height: 100,
            })
        }

        const { result } = renderHook(() => useElementCoordinates(mockRef))

        act(() => {
            window.dispatchEvent(new Event('scroll'))
        })

        expect(result.current).toEqual<ElementCoordinates>({
            topLeft: { top: 10, left: 20 },
            topRight: { top: 10, right: 220 },
            bottomLeft: { bottom: 110, left: 20 },
            bottomRight: { bottom: 110, right: 220 },
            width: 200,
            height: 100,
        })

        if (mockRef.current) {
            ;(mockRef.current.getBoundingClientRect as ReturnType<typeof vi.fn>).mockReturnValue({
                top: 30,
                left: 40,
                bottom: 130,
                right: 240,
                width: 200,
                height: 100,
            })
        }

        act(() => {
            window.dispatchEvent(new Event('scroll'))
        })

        expect(result.current).toEqual<ElementCoordinates>({
            topLeft: { top: 30, left: 40 },
            topRight: { top: 30, right: 240 },
            bottomLeft: { bottom: 130, left: 40 },
            bottomRight: { bottom: 130, right: 240 },
            width: 200,
            height: 100,
        })
    })
})
