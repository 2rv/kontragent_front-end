import { useEffect } from 'react';
import { SettingEmailComponent } from './settings-email.component';
import {
  SETTINGS_EMAIL_FIELD_NAME,
  SETTINGS_FORM_CHANGE_EMAIL_FIELD_NAME,
} from './settings-email.type';
import { useDispatch, useSelector } from 'react-redux';
import {
  settingsEmailGetEmail,
  settingsFormChangeEmailUploadForm,
} from './settings-email.action';
import { SETTINGS_EMAIL_STORE_NAME } from './settings-email.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  isRequestPending,
  isRequestSuccess,
  isRequestError,
  getRequestData,
  getRequestErrorMessage,
} from '../../main/store/store.service';
import { settingsFormChangeEmailValidation } from './settings-email.validation';
import { convertSettingsFormChangeEmailData } from './settings-email.convert';

export function SettingEmailContainer() {
  const dispatch = useDispatch();
  const { settingsEmailState, pageLoading, settingsChangeEmailState } =
    useSelector((state) => ({
      settingsEmailState: state[SETTINGS_EMAIL_STORE_NAME].settingsEmail,
      settingsChangeEmailState:
        state[SETTINGS_EMAIL_STORE_NAME].settingsChangeEmail,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    }));

  const getInitialValue = () => {
    return {
      [SETTINGS_EMAIL_FIELD_NAME.EMAIL]: getRequestData(settingsEmailState, ''),
      [SETTINGS_EMAIL_FIELD_NAME.PASSWORD]: '',
    };
  };

  const settingsFormChangeEmailSendData = (values) => {
    const data = convertSettingsFormChangeEmailData(values);
    dispatch(settingsFormChangeEmailUploadForm(data));
  };

  useEffect(() => {
    dispatch(settingsEmailGetEmail());
  }, []);

  return (
    <SettingEmailComponent
      enableReinitialize={true}
      validation={settingsFormChangeEmailValidation}
      onSubmitForm={settingsFormChangeEmailSendData}
      initialValue={getInitialValue()}
      settingsEmailFieldName={SETTINGS_FORM_CHANGE_EMAIL_FIELD_NAME}
      pageLoading={pageLoading}
      FormPending={isRequestPending(settingsChangeEmailState)}
      FormError={isRequestError(settingsChangeEmailState)}
      FormSuccess={isRequestSuccess(settingsChangeEmailState)}
      FormErrorMessage={getRequestErrorMessage(settingsChangeEmailState)}
      dataPending={isRequestPending(settingsEmailState)}
      dataError={isRequestError(settingsEmailState)}
      dataErrorMessage={getRequestErrorMessage(settingsEmailState)}
    />
  );
}
