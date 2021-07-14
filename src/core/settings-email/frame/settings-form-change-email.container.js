import { Formik } from 'formik';
import { SettingsFormChangeEmailComponent } from './settings-form-change-email.component';

import { SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY } from './settings-form-change-email.type';

export function SettingsFormChangeEmailContainer(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settingsEmailFieldName,
  } = props;

  const EMAIL_NAME =
      settingsEmailFieldName[SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY.EMAIL],
    PASSWORD_NAME =
      settingsEmailFieldName[SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY.PASSWORD];

  return (
    <Formik initialValues={initialValue}>
      {(props) => (
        <SettingsFormChangeEmailComponent
          fieldEmail={EMAIL_NAME}
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
  );
}
