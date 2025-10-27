export interface ILoginRequest {
  telegram_id: string;
  init_data?: string;
}

export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
  user: IUser;
}

export interface IUser {
  id: string;
  telegram_id: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  language_code?: string;
}

export interface IValidateHashArgs {
  ip: string;
  initDataRaw: string;
}

export interface IValidateHashResponse {
  accessToken: string;
  refreshToken: string;
}