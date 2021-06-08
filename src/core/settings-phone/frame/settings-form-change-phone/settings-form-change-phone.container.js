import { Formik } from 'formik';
import { SettingsFormChangePhoneComponent } from './settings-form-change-phone.component';

import { SETTINGS_FORM_CHANGE_PHONE_FIELD_KEY } from './settings-form-change-phone.type';

export function SettingsFormChangePhoneContainer(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settingsEmailFieldName,
  } = props;

  const PHONE_NUMBER_NAME =
      settingsEmailFieldName[SETTINGS_FORM_CHANGE_PHONE_FIELD_KEY.EMAIL],
    PASSWORD_NAME =
      settingsEmailFieldName[SETTINGS_FORM_CHANGE_PHONE_FIELD_KEY.PASSWORD];

  return (
    <div>
      <Formik initialValues={initialValue}>
        {(props) => (
          <SettingsFormChangePhoneComponent
            fieldPhoneNumber={PHONE_NUMBER_NAME}
            fieldPassword={PASSWORD_NAME}
            pageLoading={pageLoading}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            {...props}
          />
        )}
      </Formik>
    </div>
  );
}
