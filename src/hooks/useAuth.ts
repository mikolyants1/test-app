import { useEffect, useState } from 'react';
import { AuthApi } from '@/api/auth/auth.api';
import { useAuthData } from '@/store/auth/useAuthData';
import { DAY_IN_MS } from '@/consts/time.const';
import { TimeUtils } from '@/utils/time.utils';
import { clone } from '@/utils/clone.utils';
import { defaultParams } from '@/store/auth/default';
import { useRawInitData } from '@telegram-apps/sdk-react';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const { access, setAccess } = useAuthData();
  const initData = useRawInitData();

  useEffect(() => {
    if (access.expire !== 0) {
      const compare = TimeUtils.compareAuthTime(access);
      if (compare) setAccess(clone(defaultParams));
    }
  }, [access]);

  useEffect(() => {
    const authtorize = async () => {
      try {
        await AuthApi.test();
        if (access.value) return setIsAuth(true);
        if (!initData) return;
        await AuthApi.validateHash({ initDataRaw: initData, ip: 'test-app-taupe-theta.vercel.app' }).then(data => {
          if (data.accessToken) {
            setAccess({ value: true, timestamp: Date.now(), expire: DAY_IN_MS });
          }
          setIsAuth(!!data.accessToken);
        });
      } catch (e) {
        console.log(e);
        prompt('t', JSON.stringify(e))
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
