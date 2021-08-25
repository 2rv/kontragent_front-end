import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  isRequestPending,
  isRequestSuccess,
  isRequestError,
  getRequestData,
  getRequestErrorMessage,
} from '../../main/store/store.service';
import {
  SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_NAME,
  SETTINGS_EMAIL_DATA_NAME,
} from './settings-notification.type';
import {
  settingsNotificationChangeEmail,
  settingsNotificationGetEmail,
} from './settings-notification.action';
import { settingsNotificationFormValidation } from './settings-notification.validation';
import { SettingsNotificationComponent } from './settings-notification.component';
import { SETTINGS_CHANGE_EMAIL_NOTIFICATION_STORE_NAME } from './settings-notification.constant';
import { useEffect } from 'react';

export function SettingsNotificationContainer() {
  const dispatch = useDispatch();
  const { pageLoading, settingsEmailState, changeEmailState } = useSelector(
    (state) => ({
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      settingsEmailState:
        state[SETTINGS_CHANGE_EMAIL_NOTIFICATION_STORE_NAME].settingsEmail,
      changeEmailState:
        state[SETTINGS_CHANGE_EMAIL_NOTIFICATION_STORE_NAME]
          .settingsNotification,
    }),
  );
  const onSubmitChangeEmailNotification = (values) => {
    console.log(values);
    // settingsNotificationChangeEmail()
  };
  useEffect(() => {
    // dispatch(settingsNotificationGetEmail());
  }, []);

  const getInitialValue = () => {
    return {
      [SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_NAME.EMAIL]:
        settingsEmailState.data?.[SETTINGS_EMAIL_DATA_NAME.EMAIL] || '',
    };
  };
  return (
    <SettingsNotificationComponent
      enableReinitialize={true}
      initialValue={getInitialValue()}
      settingsNotificationFieldName={
        SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_NAME
      }
      onSubmitForm={onSubmitChangeEmailNotification}
      pageLoading={pageLoading}
      dataPending={isRequestPending(settingsEmailState)}
      dataError={isRequestError(settingsEmailState)}
      dataErrorMessage={getRequestErrorMessage(settingsEmailState)}
      FormPending={isRequestPending(changeEmailState)}
      FormError={isRequestError(changeEmailState)}
      FormSuccess={isRequestSuccess(changeEmailState)}
      FormErrorMessage={getRequestErrorMessage(changeEmailState)}
      validation={settingsNotificationFormValidation}
    />
  );
}
