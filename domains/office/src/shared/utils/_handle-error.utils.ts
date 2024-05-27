import { AxiosError } from 'axios'

export function handleError(error: unknown) {
    if (error instanceof AxiosError) {
        return error.response?.data
    } else {
        console.error('An unexpected error occurred:', error)

        /**
         * External Error Logger
         */
    }
}
