import { create } from 'zustand';
import type { IAuthData, IAuthDataStore } from './types';
import { devtools, persist } from 'zustand/middleware';
import { clone } from '@/utils/clone.utils';
import { defaultParams } from './default';

export const useAuthData = create<IAuthDataStore>()(
  persist(
    devtools(set => ({
      access: clone<IAuthData<boolean>>(defaultParams),
      auth_token: clone<IAuthData<string>>(defaultParams),
      setAccess: access => set({ access }),
      setToken: auth_token => set({ auth_token }),
    })),
    { name: 'auth-data', version: 1 },
  ),
);
