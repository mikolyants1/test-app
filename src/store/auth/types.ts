export interface IAuthData<T> {
  expire: number;
  timestamp: number;
  value: null | T;
}

export interface IAuthDataStore {
  auth_token: IAuthData<string>;
  access: IAuthData<boolean>;
  setAccess: (args: IAuthData<boolean>) => void;
  setToken: (args: IAuthData<string>) => void;
}
