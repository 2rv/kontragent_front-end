import { SettingsPhoneComponent } from './settings-phone.component';
import {
  SETTINGS_PHONE_FIELD_NAME,
  SETTINGS_FORM_CHANGE_PHONE_FIELD_NAME,
} from './settings-phone.type';

export function SettingsPhoneContainer() {
  const SettingsPhoneContainerGetInitialValue = () => {
    return {
      [SETTINGS_PHONE_FIELD_NAME.PHONE_NUMBER]: '',
      [SETTINGS_PHONE_FIELD_NAME.PASSWORD]: '',
    };
  };
  return (
    <SettingsPhoneComponent
      initialValue={SettingsPhoneContainerGetInitialValue()}
      settingsEmailFieldName={SETTINGS_FORM_CHANGE_PHONE_FIELD_NAME}
      pageLoading={true}
      isPending={true}
      isError={true}
      isSuccess={false}
      errorMessage={null}
    />
  );
}
