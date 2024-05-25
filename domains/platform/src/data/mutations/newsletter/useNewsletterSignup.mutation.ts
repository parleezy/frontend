import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

// Packages
import { Api } from '@parleezy/data'

// Data
import { mutationKeys } from '../keys'
import { Client } from '@/data/client'

export function useNewsletterSignupMutation() {
    return useMutation<Api.Response<boolean>, AxiosError, Api.NewsletterSignupParams>({
        mutationFn: async (data) => {
            const response = await Client.newsletter.signup(data)

            return response.data
        },
        mutationKey: mutationKeys.newsletter.signup(),
        retry: false,
    })
}
