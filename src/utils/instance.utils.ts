import axios, { AxiosInstance } from 'axios';

export class HttpInstance {
    private static httpInstance: AxiosInstance | null = null;

    static getInstance(): AxiosInstance {
        if (!this.httpInstance) {
            this.httpInstance = axios.create({
                baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
                withCredentials: true,
            });
        }
        return this.httpInstance;
    }
}