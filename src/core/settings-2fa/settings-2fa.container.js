import React from 'react';
import { Settings2FAComponent } from './settings-2fa.component';
import {
  SETTINGS_2FA_FORM_FIELD_NAME,
  SETTINGS_2FA_FIELD_NAME,
} from './settings-2fa.type';
import { useDispatch, useSelector } from 'react-redux';
import { settings2FAFormValidation } from './settings-2fa.validation';
import { convertSettings2FAFormData } from './settings-2fa.convert';
import { settings2FAFormUploadData } from './settings-2fa.action';
import { SETTINGS_2FA_STORE_NAME } from './settings-2fa.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function Settings2FAContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SETTINGS_2FA_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const settings2FAFormFormSendData = (values) => {
    const data = convertSettings2FAFormData(values);
    dispatch(settings2FAFormUploadData(data));
  };

  const getInitialValue = () => {
    return {
      [SETTINGS_2FA_FIELD_NAME.PHONE_NUMBER]: '',
    };
  };

  return (
    <Settings2FAComponent
      isPending={isRequestPending(state.settings2FA)}
      isError={isRequestError(state.settings2FA)}
      isSuccess={isRequestSuccess(state.settings2FA)}
      initialValue={getInitialValue()}
      validation={settings2FAFormValidation}
      onSubmitForm={settings2FAFormFormSendData}
      fieldName={SETTINGS_2FA_FORM_FIELD_NAME}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.settings2FA)}
    />
  );
}
