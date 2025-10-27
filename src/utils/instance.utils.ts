import { useAuthData } from '@/store/auth/useAuthData';
import axios, { AxiosInstance } from 'axios';

export class HttpInstance {
    private static httpInstance: AxiosInstance | null = null;

    static getInstance(): AxiosInstance {
        if (!this.httpInstance) {
            this.httpInstance = axios.create({
                baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
            });
            this.httpInstance.interceptors.request.use(config => {
                const token = useAuthData.getState().auth_token.value;
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            });
        }
        return this.httpInstance;
    }

    static resetInstance(): void {
        this.httpInstance = null;
    }
}