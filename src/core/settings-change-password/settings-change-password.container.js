import React from 'react';

import { SettingsChangePasswordComponent } from './settings-change-password.component';

import { useSelector } from 'react-redux';

import { settingsChangePasswordFormValidation } from './settings-change-password.validation';

import {
  SETTINGS_CHANGE_PASSWORD_DATA_NAME,
  SETTINGS_CHANGE_PASSWORD_API,
} from './settings-change-password.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';

import { convertSettingsChangePasswordFormData } from './settings-change-password.convert';

export function SettingsChangePasswordContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const settingsChangePasswordFormSendData = async (values) => {
    const data = convertSettingsChangePasswordFormData(values);

    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      await httpRequest({
        method: SETTINGS_CHANGE_PASSWORD_API.SETTINGS_CHANGE_PASSWORD.TYPE,
        url: SETTINGS_CHANGE_PASSWORD_API.SETTINGS_CHANGE_PASSWORD.ENDPOINT,
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
      [SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD_REPEAT]: '',
      [SETTINGS_CHANGE_PASSWORD_DATA_NAME.NEW_PASSWORD]: '',
      [SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <SettingsChangePasswordComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={settingsChangePasswordFormValidation}
      onSubmitForm={settingsChangePasswordFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
