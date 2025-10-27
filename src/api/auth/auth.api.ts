import { HttpClient } from "../http.api";
import { type IValidateHashResponse, type ILoginRequest, type ILoginResponse, type IValidateHashArgs } from "./auth.types";

export class AuthApi extends HttpClient {
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        const response = await this.http.post<ILoginResponse>(
            "/auth/login",
            data
        );
        return response.data;
    }

    static async refresh(refreshToken: string): Promise<ILoginResponse> {
        const response = await this.http.post<ILoginResponse>(
            "/auth/refresh",
            { refresh_token: refreshToken }
        );
        return response.data;
    }

    static async validateHash(args: IValidateHashArgs) {
        return this.http.post<IValidateHashResponse>('/token/create', args).then(({ data }) => data);
    }
    static async logout(): Promise<void> {
        await this.http.post("/auth/logout");
    }
}