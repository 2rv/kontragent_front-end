import { SettingEmailComponent } from './settings-email.component';
import {
  SETTINGS_EMAIL_FIELD_NAME,
  SETTINGS_FORM_CHANGE_EMAIL_FIELD_NAME,
} from './settings-email.type';

export function SettingEmailContainer() {
  const getInitialValue = () => {
    return {
      [SETTINGS_EMAIL_FIELD_NAME.EMAIL]: '',
      [SETTINGS_EMAIL_FIELD_NAME.PASSWORD]: '',
    };
  };
  return (
    <SettingEmailComponent
      initialValue={getInitialValue()}
      settingsEmailFieldName={SETTINGS_FORM_CHANGE_EMAIL_FIELD_NAME}
      pageLoading={true}
      isPending={true}
      isError={true}
      isSuccess={false}
      errorMessage={null}
    />
  );
}
