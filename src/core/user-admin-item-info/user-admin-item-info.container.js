import React from 'react';

import { UserAdminItemInfoComponent } from './user-admin-item-info.component';

import { useSelector, useDispatch } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { USER_ADMIN_ROLE_STORE_NAME } from '../user-admin-role/user-admin-role.constant';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { getUserAdminItemInfo } from './user-admin-item-info.action';
import { performUserAdminItemInfoData } from './user-admin-item-info.convert';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { USER_ADMIN_ITEM_INFO_STORE_NAME } from './user-admin-item-info.constant';

export function UserAdminItemInfoContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, data } = useSelector((state) => ({
    data: state[USER_ADMIN_ITEM_INFO_STORE_NAME],
    state: state[USER_ADMIN_ROLE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    dispatch(getUserAdminItemInfo());
  }, []);

  return (
    <UserAdminItemInfoComponent
      isPending={isRequestPending(data.user)}
      isError={isRequestError(data.user)}
      isSuccess={isRequestSuccess(data.user)}
      data={getRequestData(data.user, '')}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(data.user)}
    />
  );
}
