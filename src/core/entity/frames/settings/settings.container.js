import { SettingsComponent } from './settings.component';
import {
  COMPANY_SETTINGS_FIELD_NAME,
  COMPANY_SETTINGS_FORM_FIELD_NAME,
} from './settings.type';

export function SettingsContainer() {
  const companySettingsFormSendData = (values) => {
    console.log('Values', values);
  };

  const companySettingsFormGetInitialValue = () => ({
    [COMPANY_SETTINGS_FIELD_NAME.QUESTION_CATEGORY]: '',
    [COMPANY_SETTINGS_FIELD_NAME.YOUR_QUESTION]: '',
    [COMPANY_SETTINGS_FIELD_NAME.PROBLEM_DESCRIPTION]: '',
    [COMPANY_SETTINGS_FIELD_NAME.PROBLEM_DESCRIPTION]: '',
  });

  return (
    <SettingsComponent
      onSubmit={companySettingsFormSendData}
      initialValue={companySettingsFormGetInitialValue()}
      fieldName={COMPANY_SETTINGS_FORM_FIELD_NAME}
    />
  );
}
