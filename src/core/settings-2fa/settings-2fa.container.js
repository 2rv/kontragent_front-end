import { Settings2FAComponent } from './settings-2fa.component';
import {
  SETTINGS_2FA_FORM_FIELD_NAME,
  SETTINGS_2FA_FIELD_NAME,
} from './settings-2fa.type';

export function Settings2FAContainer() {
  const getInitialValue = () => {
    return {
      [SETTINGS_2FA_FIELD_NAME.PHONE_NUMBER]: '',
    };
  };
  return (
    <Settings2FAComponent
      initialValue={getInitialValue()}
      settings2faFormFieldName={SETTINGS_2FA_FORM_FIELD_NAME}
      pageLoading={true}
      isPending={true}
      isError={true}
      isSuccess={true}
      errorMessage={null}
    />
  );
}
