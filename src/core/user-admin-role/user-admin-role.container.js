import React from 'react';
import { UserAdminRoleComponent } from './user-admin-role.component';
import { useDispatch, useSelector } from 'react-redux';
import { convertUserAdminRoleFormData } from './user-admin-role.convert';
import {
  USER_ADMIN_ROLE_STORE_NAME,
  USER_ADMIN_ROLE_DATA_NAME,
} from './user-admin-role.constant';
import {
  changeUserAdminRole,
  resetUserAdminItemUpdateDataFormState,
} from './user-admin-role.action';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { USER_ADMIN_ITEM_INFO_STORE_NAME } from '../user-admin-item-info';

export function UserAdminRoleContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, userData } = useSelector((state) => ({
    state: state[USER_ADMIN_ROLE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    userData: state[USER_ADMIN_ITEM_INFO_STORE_NAME],
  }));

  React.useEffect(() => {
    dispatch(resetUserAdminItemUpdateDataFormState());
  }, []);

  const userAdminRoleFormSendData = (values) => {
    const data = convertUserAdminRoleFormData(values);
    dispatch(changeUserAdminRole(data));
  };

  const getInitialValue = () => {
    if (isRequestSuccess(userData.user)) {
      const data = getRequestData(userData.user, '');

      return {
        [USER_ADMIN_ROLE_DATA_NAME.ROLE]: data[USER_ADMIN_ROLE_DATA_NAME.ROLE],
      };
    }
    return {
      [USER_ADMIN_ROLE_DATA_NAME.ROLE]: '',
    };
  };

  return (
    <UserAdminRoleComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      isDependentPending={isRequestPending(userData.user)}
      onSubmitForm={userAdminRoleFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
