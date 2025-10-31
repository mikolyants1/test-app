export interface IAuthData<T> {
  expire: number;
  timestamp: number;
  value: null | T;
}

export interface IAuthDataStore {
  access: IAuthData<boolean>;
  setAccess: (args: IAuthData<boolean>) => void;
}
