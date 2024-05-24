import { IconPropsInterface } from '@/lib/types/IconProps.interface'

export function ChevronSelectorHorizontalIcon({ size = '24px', ...rest }: IconPropsInterface): JSX.Element {
    return (
        <svg
            {...rest}
            aria-hidden="true"
            fill="none"
            height={size}
            viewBox="0 0 24 24"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 7L4 12L9 17M15 7L20 12L15 17"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    )
}
