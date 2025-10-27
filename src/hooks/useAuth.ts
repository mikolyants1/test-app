import { useEffect, useState } from 'react';
import { useTelegram } from './useTelegram';
import { AuthApi } from '@/api/auth/auth.api';
import { useAuthData } from '@/store/auth/useAuthData';
import { DAY_IN_MS } from '@/consts/time.const';
import { TimeUtils } from '@/utils/time.utils';
import { clone } from '@/utils/clone.utils';
import { defaultParams } from '@/store/auth/default';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const { access, auth_token, setAccess, setToken } = useAuthData();
  const { initData } = useTelegram();

  useEffect(() => {
    if (auth_token.expire !== 0) {
      const compare = TimeUtils.compareAuthTime(auth_token);
      if (compare) setToken(clone(defaultParams));
    }

    if (access.expire !== 0) {
      const compare = TimeUtils.compareAuthTime(access);
      if (compare) setAccess(clone(defaultParams));
    }
  }, [auth_token, access]);

  useEffect(() => {
    const authtorize = async () => {
      try {
        if (access.value) return setIsAuth(true);
        if (!initData) return;
        await AuthApi.validateHash({ initDataRaw: initData, ip: '' }).then(data => {
          if (data.accessToken) {
            setToken({ value: data.accessToken, timestamp: Date.now(), expire: DAY_IN_MS });
            setAccess({ value: true, timestamp: Date.now(), expire: DAY_IN_MS });
          }
          setIsAuth(!!data.accessToken);
        });
      } catch (e) {
        console.log(e);
        alert(JSON.stringify((e as any)['message']))
        setIsAuth(false);
      }
    };
    authtorize();
  }, [initData, access]);

  return {
    isAuth,
    initData,
  };
};
