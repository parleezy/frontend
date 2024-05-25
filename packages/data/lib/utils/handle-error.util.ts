import { AxiosError } from 'axios'

// Type
import { Api } from '@/api'

export function handleError(error: unknown): Api.ErrorResponse | void {
    if (error instanceof AxiosError) {
        return error.response?.data
    } else {
        console.error('An unexpected error occurred:', error)

        /**
         * External Error Logger
         */
    }
}
