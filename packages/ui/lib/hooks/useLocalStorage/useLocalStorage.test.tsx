import { renderHook, act } from '@/test/index'

// Hook
import { useLocalStorage } from './useLocalStorage'

const mockLocalStorage = (() => {
    let store: { [key: string]: string } = {}

    return {
        getItem: vi.fn((key: string) => store[key] || null),
        setItem: vi.fn((key: string, value: any) => {
            store[key] = JSON.stringify(value)
        }),
        removeItem: vi.fn((key: string) => {
            delete store[key]
        }),
        clear: vi.fn(() => {
            store = {}
        }),
    }
})()

global.localStorage = mockLocalStorage as any

describe('useLocalStorage', () => {
    beforeEach(() => {
        localStorage.clear()

        vi.spyOn(console, 'error').mockImplementation(() => {})
        vi.clearAllMocks()
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('initializes with the initial value if nothing is stored', () => {
        const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'))

        expect(result.current[0]).toBe('defaultValue')
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
        expect(localStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify('defaultValue'))
    })

    it('reads an existing value from localStorage', () => {
        mockLocalStorage.setItem('testKey', 'storedValue')

        const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'))

        expect(result.current[0]).toBe('storedValue')
    })

    it('sets a new value in localStorage', () => {
        const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'))

        act(() => {
            result.current[1]('newValue')
        })

        expect(result.current[0]).toBe('newValue')
        expect(localStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify('newValue'))
    })

    it('does not write to localStorage if the value is the same', () => {
        localStorage.setItem('testKey', 'sameValue')
        const { result } = renderHook(() => useLocalStorage('testKey', 'sameValue'))

        act(() => {
            result.current[1]('sameValue')
        })

        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    })

    it('handles exceptions when reading from localStorage', () => {
        vi.spyOn(global.localStorage, 'getItem').mockImplementationOnce(() => {
            throw new Error('Failed to read')
        })

        const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'))

        expect(result.current[0]).toBe('defaultValue')

        expect(console.error).toHaveBeenCalledWith('Failed to read from localStorage', expect.any(Error))
    })

    it('handles exceptions when writing to localStorage', () => {
        const { result } = renderHook(() => useLocalStorage('testKey', 'someValue'))
        vi.spyOn(global.localStorage, 'setItem').mockImplementationOnce(() => {
            throw new Error('Failed to write')
        })

        act(() => {
            result.current[1]('newValue')
        })

        expect(console.error).toHaveBeenCalledWith('Failed to write to localStorage', expect.any(Error))
    })
})
