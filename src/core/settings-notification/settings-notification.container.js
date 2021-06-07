import { SettingsNotificationComponent } from './settings-notification.component';
import {
  SETTINGS_NOTIFICATION_FIELD_NAME,
  SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_NAME,
} from './settings-notification.type';

export function SettingsNotificationContainer() {
  const getInitialValue = () => {
    return {
      [SETTINGS_NOTIFICATION_FIELD_NAME.EMAIL]: '',
    };
  };
  return (
    <SettingsNotificationComponent
      initialValue={getInitialValue()}
      settingsNotificationFieldName={
        SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_NAME
      }
      pageLoading={true}
      isPending={true}
      isError={true}
      isSuccess={false}
      errorMessage={null}
    />
  );
}
