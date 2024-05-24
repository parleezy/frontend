import { IconPropsInterface } from '@/lib/types/IconProps.interface'

export function ChevronSelectorVerticalIcon({ size = '24px', ...rest }: IconPropsInterface): JSX.Element {
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
                d="M7 15L12 20L17 15M7 9L12 4L17 9"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    )
}
