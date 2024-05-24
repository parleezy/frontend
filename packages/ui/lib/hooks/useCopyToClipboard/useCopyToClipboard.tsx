import { useState, useEffect, useRef } from 'react'

export function useCopyToClipboard() {
    const [copied, setCopied] = useState(false)
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current)
            }
        }
    }, [])

    const copyToClipboard = (text: string) => {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text)
            return
        }

        navigator.clipboard
            .writeText(text)
            // eslint-disable-next-line promise/always-return
            .then(() => {
                setCopied(true)
                timeoutIdRef.current = setTimeout(() => setCopied(false), 2000)
            })
            .catch((err) => {
                console.error('Failed to copy:', err)
            })
    }

    const fallbackCopyTextToClipboard = (text: string) => {
        const textArea = document.createElement('textarea')
        textArea.value = text

        Object.assign(textArea.style, {
            top: '0',
            left: '0',
            position: 'fixed',
            opacity: '0',
        })

        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()

        try {
            const successful = document.execCommand('copy')
            setCopied(successful)
            timeoutIdRef.current = setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err)
        }

        document.body.removeChild(textArea)
    }

    return { copyToClipboard, copied }
}
