import React from 'react';

import { SettingsChangeEmailComponent } from './settings-change-email.component';

import { useDispatch, useSelector } from 'react-redux';

import { settingsChangeEmailFormValidation } from './settings-change-email.validation';

import { SETTINGS_CHANGE_EMAIL_DATA_NAME } from './settings-change-email.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AUTH_STORE_NAME } from '../../lib/common/auth/auth.constant';

import { httpRequest } from '../../main/http';

export function SettingsChangeEmailContainer() {
  const { pageLoading, user } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
  }));

  const loginFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'PATCH',
        url: '/user-settings/password',
        data,
      });

      setRequestPending(false);
      setRequestSuccess(true);
    } catch (error) {
      if (error) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const getInitialValue = () => {
    return {
      [SETTINGS_CHANGE_EMAIL_DATA_NAME.EMAIL]: user ? user.email : '',
      [SETTINGS_CHANGE_EMAIL_DATA_NAME.PASSWORD]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <SettingsChangeEmailComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={settingsChangeEmailFormValidation}
      onSubmitForm={loginFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
