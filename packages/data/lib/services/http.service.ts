import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'
import { Api } from '../api'

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    _retry?: boolean
}

export class HttpService {
    _instance: AxiosInstance

    constructor(private _root: string) {
        this._instance = axios.create({
            baseURL: this._root,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        this.setupInterceptors()
    }

    protected async _refresh(): Promise<Api.Tokens> {
        const token = Cookies.get('refresh')

        const response = await axios.post<Api.Response<Api.Tokens>>(
            `${this._root}/authentication/refresh`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            },
        )

        const { access, refresh } = response.data.data

        Cookies.set('access', access, { expires: 15 / (24 * 60), path: '/', secure: false })
        Cookies.set('refresh', refresh, { expires: 7, path: '/', secure: false })

        return response.data.data
    }

    private setupInterceptors() {
        this._instance = axios.create({
            baseURL: this._root,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        this._instance.interceptors.request.use(this.requestInterceptor)
        this._instance.interceptors.response.use(this.responseSuccessInterceptor, this.responseErrorInterceptor)
    }

    private requestInterceptor = (config: InternalAxiosRequestConfig) => {
        const access = Cookies.get('access')

        if (access) {
            config.headers.Authorization = `Bearer ${access}`
        }

        return config
    }

    private responseSuccessInterceptor = (response: AxiosResponse) => response
    private responseErrorInterceptor = async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig

        if (!originalRequest) {
            return Promise.reject(error)
        }

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const { access } = await this._refresh()

                axios.defaults.headers.common['Authorization'] = `Bearer ${access}`
                originalRequest.headers!.Authorization = `Bearer ${access}`

                return this._instance(originalRequest)
            } catch (refreshError: unknown) {
                window.dispatchEvent(new Event('logout-event'))

                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
}
