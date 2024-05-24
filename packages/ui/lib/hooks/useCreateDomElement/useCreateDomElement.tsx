import { useState, useEffect } from 'react'

export function useCreateDomElement(): HTMLDivElement | null {
    const [domElement, setDomElement] = useState<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = document.createElement('div')
        el.id = 'custom-div-element'
        document.body.append(el)
        setDomElement(el)

        return () => {
            if (document.body.contains(el)) {
                document.body.removeChild(el)
            }
        }
    }, [])

    return domElement
}
