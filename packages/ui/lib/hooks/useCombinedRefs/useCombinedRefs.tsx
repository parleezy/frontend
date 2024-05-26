import { useRef, useEffect, MutableRefObject, ForwardedRef } from 'react'

export function useCombinedRefs<T>(
    ...refs: (ForwardedRef<T> | MutableRefObject<T> | null)[]
): MutableRefObject<T | null> {
    const targetRef = useRef<T | null>(null)

    useEffect(() => {
        refs.forEach((ref) => {
            if (!ref) return

            if (typeof ref === 'function') {
                ref(targetRef.current)
            } else if (ref) {
                ;(ref as MutableRefObject<T | null>).current = targetRef.current
            }
        })
    }, [refs])

    return targetRef
}
