import { NewsletterService } from '@parleezy/data'

class ClientAPI {
    public newsletter = new NewsletterService(import.meta.env.VITE_API_ROOT)
}

export const Client = new ClientAPI()
