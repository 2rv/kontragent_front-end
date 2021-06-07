import { Formik } from 'formik';
import { SettingsFormChangeEmailComponent } from './settings-form-change-email.component';

import { FIELD_FORM_CHANGE_EMAIL_FIELD_KEY } from './settings-form-change-email.type';

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
      settingsEmailFieldName[FIELD_FORM_CHANGE_EMAIL_FIELD_KEY.EMAIL],
    PASSWORD_NAME =
      settingsEmailFieldName[FIELD_FORM_CHANGE_EMAIL_FIELD_KEY.PASSWORD];

  return (
    <div>
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
    </div>
  );
}
