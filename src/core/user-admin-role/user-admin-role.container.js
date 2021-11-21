import React from 'react';
import { UserAdminRoleComponent } from './user-admin-role.component';
import { useDispatch, useSelector } from 'react-redux';
import { convertUserAdminRoleFormData } from './user-admin-role.convert';
import {
  USER_ADMIN_ROLE_STORE_NAME,
  USER_ADMIN_ROLE_DATA_NAME,
  USER_ADMIN_ROLE_ACTION_TYPE,
} from './user-admin-role.constant';
import { changeUserAdminRole } from './user-admin-role.action';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function UserAdminRoleContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[USER_ADMIN_ROLE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const userAdminRoleFormSendData = (values) => {
    const data = convertUserAdminRoleFormData(values);
    dispatch(changeUserAdminRole(data));
  };

  const getInitialValue = () => {
    return {
      [USER_ADMIN_ROLE_DATA_NAME.ROLE]: null,
    };
  };

  return (
    <UserAdminRoleComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      onSubmitForm={userAdminRoleFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
