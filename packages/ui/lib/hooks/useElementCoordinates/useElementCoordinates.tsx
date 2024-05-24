import { useCallback, useEffect, useState } from 'react'

export interface ElementCoordinates {
    topLeft: { top: number; left: number }
    topRight: { top: number; right: number }
    bottomLeft: { bottom: number; left: number }
    bottomRight: { bottom: number; right: number }
    width: number
    height: number
}

export const useElementCoordinates = (ref: React.RefObject<HTMLElement>): ElementCoordinates | null => {
    const [coordinates, setCoordinates] = useState<ElementCoordinates | null>(null)

    const updateCoordinates = useCallback(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect()

            setCoordinates({
                topLeft: { top: rect.top, left: rect.left },
                topRight: { top: rect.top, right: rect.right },
                bottomLeft: { bottom: rect.bottom, left: rect.left },
                bottomRight: { bottom: rect.bottom, right: rect.right },
                width: rect.width,
                height: rect.height,
            })
        }
    }, [ref])

    useEffect(() => {
        updateCoordinates()

        window.addEventListener('resize', updateCoordinates)
        window.addEventListener('scroll', updateCoordinates)

        const resizeObserver = new ResizeObserver(() => {
            updateCoordinates()
        })

        const parentElement = ref.current?.parentElement
        if (parentElement) {
            resizeObserver.observe(parentElement)
        }

        return () => {
            window.removeEventListener('resize', updateCoordinates)
            window.removeEventListener('scroll', updateCoordinates)

            if (parentElement) {
                resizeObserver.unobserve(parentElement)
            }
        }
    }, [updateCoordinates, ref])

    return coordinates
}
