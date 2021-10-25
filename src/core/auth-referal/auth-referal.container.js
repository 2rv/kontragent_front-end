import React, { useEffect } from 'react';
import { getQuery } from '../../main/navigation/navigation.core';
import { setLocalData } from '../../main/store/store.service';
import { LOCAL_STORAGE_KEY } from './auth-referal.constant';
import { AuthReferalComponent } from './auth-referal.component';

export function AuthReferalContainer() {
  useEffect(() => {
    const data = getQuery('referalId');
    setLocalData(LOCAL_STORAGE_KEY, data);
  }, []);

  return <AuthReferalComponent />;
}
