import { SettingsPasswordComponent } from './settings-password.component';
import {
  SETTINGS_PASSWORD_FIELD_NAME,
  SETTINGS_FORM_CHANGE_PASSWORD_FIELD_NAME,
} from './settings-password.type';

export function SettingsPasswordContainer() {
  const getInitialValue = () => {
    return {
      [SETTINGS_PASSWORD_FIELD_NAME.NEW_PASSWORD]: '',
      [SETTINGS_PASSWORD_FIELD_NAME.REPEAT_NEW_PASSWORD]: '',
      [SETTINGS_PASSWORD_FIELD_NAME.OLD_PASSWORD]: '',
    };
  };
  return (
    <SettingsPasswordComponent
      initialValue={getInitialValue()}
      settingsPasswordFieldName={SETTINGS_FORM_CHANGE_PASSWORD_FIELD_NAME}
      pageLoading={true}
      isPending={true}
      isError={true}
      isSuccess={false}
      errorMessage={null}
    />
  );
}
