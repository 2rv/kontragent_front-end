import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { convertUserAdminBlockedRoleFormData } from './user-admin-blocked-role.convert';
import { UserAdminBlockedRoleComponent } from './user-admin-blocked-role.component';
import { USER_ADMIN_ITEM_INFO_STORE_NAME } from '../user-admin-item-info';
import { USER_ROLE } from '../../lib/common/auth/auth.constant';
import {
  changeUserAdminRole,
  resetUserAdminItemUpdateDataFormState,
} from '../user-admin-role/user-admin-role.action';
import {
  isRequestError,
  isRequestPending,
} from '../../main/store/store.service';
import { USER_ADMIN_ROLE_STORE_NAME } from '../user-admin-role/user-admin-role.constant';

export function UserAdminBlockedRoleContainer() {
  const dispatch = useDispatch();

  const { role, pageLoading, userInfoLoaded, state } = useSelector((state) => ({
    state: state[USER_ADMIN_ROLE_STORE_NAME],
    role: state[USER_ADMIN_ITEM_INFO_STORE_NAME].user.data?.role,
    userInfoLoaded: state[USER_ADMIN_ITEM_INFO_STORE_NAME].user.success,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const updateUserRole = () => {
    const newRole =
      role === USER_ROLE.BLOCKED ? USER_ROLE.USER : USER_ROLE.BLOCKED;
    const data = convertUserAdminBlockedRoleFormData(newRole);
    dispatch(changeUserAdminRole(data));
  };

  React.useEffect(() => {
    dispatch(resetUserAdminItemUpdateDataFormState());
  }, []);

  const isBlocked = role === USER_ROLE.BLOCKED ? true : false;

  return userInfoLoaded ? (
    <UserAdminBlockedRoleComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      updateUserRole={updateUserRole}
      pageLoading={pageLoading}
      isBlocked={isBlocked}
    />
  ) : null;
}
