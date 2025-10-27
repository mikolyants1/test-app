import { useEffect, useState } from 'react';

export const useTelegram = () => {
  const [initData, setInitData] = useState<string | null>(null);

  useEffect(() => {
    const webApp = (window as any).Telegram?.WebApp;
    if (webApp) {
      setInitData(webApp.initData);
    }
  }, []);

  return {
    initData,
  };
}