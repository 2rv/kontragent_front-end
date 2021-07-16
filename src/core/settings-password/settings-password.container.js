import { useDispatch, useSelector } from 'react-redux';
import { SettingsPasswordComponent } from './settings-password.component';
import {
  SETTINGS_PASSWORD_FIELD_NAME,
  SETTINGS_FORM_CHANGE_PASSWORD_FIELD_NAME,
} from './settings-password.type';
import {
  isRequestPending,
  isRequestSuccess,
  isRequestError,
  getRequestData,
  getRequestErrorMessage,
} from '../../main/store/store.service';
import { SETTINGS_PASSWORD_STORE_NAME } from './settings-password.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { settingsFormChangePasswordValidation } from './settings-password.validation';
import { convertSettingsFormChangePasswordData } from './settings-password.convert';
import { settingsFormChangePasswordUploadForm } from './settings-password.action';

export function SettingsPasswordContainer() {
  const dispatch = useDispatch();
  const { settingsChangePasswordState, pageLoading } = useSelector((state) => ({
    settingsChangePasswordState:
      state[SETTINGS_PASSWORD_STORE_NAME].settingsChangePassword,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const settingsFormChangePasswordSendData = (values) => {
    const data = convertSettingsFormChangePasswordData(values);
    dispatch(settingsFormChangePasswordUploadForm(data));
  };

  const getInitialValue = () => {
    return {
      [SETTINGS_PASSWORD_FIELD_NAME.NEW_PASSWORD]: '',
      [SETTINGS_PASSWORD_FIELD_NAME.REPEAT_NEW_PASSWORD]: '',
      [SETTINGS_PASSWORD_FIELD_NAME.OLD_PASSWORD]: '',
    };
  };
  return (
    <SettingsPasswordComponent
      settingsPasswordFieldName={SETTINGS_FORM_CHANGE_PASSWORD_FIELD_NAME}
      pageLoading={pageLoading}
      isPending={isRequestPending(settingsChangePasswordState)}
      isError={isRequestError(settingsChangePasswordState)}
      isSuccess={isRequestSuccess(settingsChangePasswordState)}
      errorMessage={getRequestErrorMessage(settingsChangePasswordState)}
      validation={settingsFormChangePasswordValidation}
      onSubmitForm={settingsFormChangePasswordSendData}
      initialValue={getInitialValue()}
    />
  );
}
