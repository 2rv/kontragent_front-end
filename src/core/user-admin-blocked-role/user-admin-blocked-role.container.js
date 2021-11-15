import React from 'react';
import { useSelector } from 'react-redux';
import { getQuery } from '../../main/navigation/navigation.core';
import { httpRequest } from '../../main/http';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { USER_ADMIN_BLOCKED_ROLE_DATA_NAME } from './user-admin-blocked-role.constant';
import { convertUserAdminBlockedRoleFormData } from './user-admin-blocked-role.convert';
import { UserAdminBlockedRoleComponent } from './user-admin-blocked-role.component';
import { USER_ADMIN_ITEM_INFO_STORE_NAME } from '../user-admin-item-info';

export function UserAdminBlockedRoleContainer() {
  const { user, pageLoading } = useSelector((state) => ({
    //тут другую константу
    user: state[USER_ADMIN_ITEM_INFO_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const updateUserRole = () => {
    const data = convertUserAdminBlockedRoleFormData(isBlocked);
    sendData(data);
  };

  const sendData = async (data) => {
    setRequestPending(true);
    setRequestError(false);
    data = user.data.role;
    console.log(user.data.role);
    try {
      if (data === 0) {
        await httpRequest({
          method: 'PATCH',
          url: `user/admin/${getQuery('userId')}/role`,
          data,
        });

        setRequestPending(false);
      }
    } catch (error) {
      if (error) {
        setRequestError(true);
        setRequestPending(false);
      }
    }
  };

  const getInitialValue = () => {
    return {
      [USER_ADMIN_BLOCKED_ROLE_DATA_NAME.ROLE]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isBlocked, setBlocked] = React.useState(true);

  return (
    <UserAdminBlockedRoleComponent
      isPending={isRequestPending}
      isError={isRequestError}
      initialValue={getInitialValue()}
      onSubmitForm={updateUserRole}
      pageLoading={pageLoading}
      setBlocked={setBlocked}
    />
  );
}
