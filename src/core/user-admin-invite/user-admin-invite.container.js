import React, { useState } from 'react';
import { UserAdminInviteComponent } from './user-admin-invite.component';
import { USER_ADMIN_INVITE_API } from './user-admin-invite.constant';
import { convertUserAdminInviteData } from './user-admin-invite.convert';
import { httpRequest } from '../../main/http';

export function UserAdminInviteContainer() {
  const [getValue, setValue] = useState('');
  const [isRequestPending, setRequestPending] = useState(null);
  const [isRequestError, setRequestError] = useState(null);
  const [isRequestSuccess, setRequestSuccess] = useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const UserAdminInviteSendData = async () => {
    const data = convertUserAdminInviteData(getValue);

    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      await httpRequest({
        method: USER_ADMIN_INVITE_API.TYPE,
        url: USER_ADMIN_INVITE_API.ENDPOINT,
        data: data,
      });

      setRequestPending(false);
      setRequestSuccess(true);
    } catch (error) {
      if (error) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response?.data?.message);
      }
    }
  };

  return (
    <UserAdminInviteComponent
      handleChange={handleChange}
      onClick={UserAdminInviteSendData}
      value={getValue}
      isRequestError={isRequestError}
      errorMessage={getRequestErrorMessage}
      isRequestPending={isRequestPending}
      isRequestSuccess={isRequestSuccess}
    />
  );
}
