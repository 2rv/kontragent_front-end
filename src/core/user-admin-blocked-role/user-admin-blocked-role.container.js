import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { USER_ADMIN_BLOCKED_ROLE_DATA_NAME } from './user-admin-blocked-role.constant';
import { convertUserAdminBlockedRoleFormData } from './user-admin-blocked-role.convert';
import { UserAdminBlockedRoleComponent } from './user-admin-blocked-role.component';
import { USER_ADMIN_ITEM_INFO_STORE_NAME } from '../user-admin-item-info';
import { USER_ROLE } from '../../lib/common/auth/auth.constant';
import { changeUserAdminRole } from '../user-admin-role/user-admin-role.action';
import {
  isRequestError,
  isRequestPending,
  isRequestSuccess,
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

  const updateUserRole = (values) => {
    const data = convertUserAdminBlockedRoleFormData(values);
    dispatch(changeUserAdminRole(data));
    setBlocked(!isBlocked);
  };

  const [isBlocked, setBlocked] = React.useState(
    role === USER_ROLE.BLOCKED ? true : false,
  );

  const getInitialValue = () => {
    return {
      [USER_ADMIN_BLOCKED_ROLE_DATA_NAME.ROLE]:
        role === 1 ? USER_ROLE.BLOCKED : USER_ROLE.USER,
    };
  };

  return userInfoLoaded ? (
    <UserAdminBlockedRoleComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      updateUserRole={updateUserRole}
      pageLoading={pageLoading}
      isBlocked={isBlocked}
      initialValue={getInitialValue()}
    />
  ) : null;
}
