import { AxiosResponse } from 'axios'
import { Api } from '@/api'

// Main Service
import { HttpService } from '../http.service'

export class NewsletterService extends HttpService {
    async signup(dto: Api.NewsletterSignupParams): Promise<AxiosResponse<Api.Response<boolean>, Api.ErrorResponse>> {
        return await this._instance.post<Api.Response<boolean>>(`/newsletters`, dto)
    }
}
