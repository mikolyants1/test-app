'use client';

import { useAuth } from '@/hooks/useAuth'
import React, { PropsWithChildren } from 'react'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { isAuth } = useAuth();

  if (!isAuth) return <></>;

  return children;
}
