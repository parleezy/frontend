import { AxiosResponse } from 'axios'
import { Api } from '@/api'

// Main Service
import { HttpService } from '../http.service'

export class AuthenticationService extends HttpService {
    async login(dto: Api.EmailLoginParams): Promise<AxiosResponse<Api.Response<Api.Tokens>, Api.ErrorResponse>> {
        return await this._instance.post<Api.Response<Api.Tokens>>(`/authentication/email/login`, dto)
    }

    async logout(): Promise<AxiosResponse<Api.Response<null>, Api.ErrorResponse>> {
        return await this._instance.post(`/authentication/logout`, {})
    }

    async currentUser(): Promise<AxiosResponse<Api.Response<Api.User>, Api.ErrorResponse>> {
        return await this._instance.get(`/users/me`)
    }

    async refresh(): Promise<Api.Tokens> {
        return await this._refresh()
    }
}
