'use client';

import { useAuth } from '@/hooks/useAuth'
import React, { PropsWithChildren } from 'react'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { isAuth, initData } = useAuth();

  if (!isAuth) return <>err:</>;

  return <>data: {JSON.stringify(initData)}</>;
}
