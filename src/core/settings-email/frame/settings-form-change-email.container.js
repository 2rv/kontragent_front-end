import { Formik } from 'formik';
import { SettingsFormChangeEmailComponent } from './settings-form-change-email.component';

import { SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY } from './settings-form-change-email.type';

export function SettingsFormChangeEmailContainer(props) {
  const {
    validation,
    onSubmitForm,
    pageLoading,
    FormPending,
    FormError,
    FormSuccess,
    FormErrorMessage,
    initialValue,
    settingsEmailFieldName,
    enableReinitialize,

    dataPending,
    dataError,
    dataErrorMessage,
  } = props;

  const EMAIL_NAME =
      settingsEmailFieldName[SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY.EMAIL],
    PASSWORD_NAME =
      settingsEmailFieldName[SETTINGS_FORM_CHANGE_EMAIL_FIELD_KEY.PASSWORD];

  return (
    <div>
      <Formik
        enableReinitialize={enableReinitialize}
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(props) => (
          <SettingsFormChangeEmailComponent
            fieldEmail={EMAIL_NAME}
            fieldPassword={PASSWORD_NAME}
            pageLoading={pageLoading}
            FormPending={FormPending}
            FormError={FormError}
            FormSuccess={FormSuccess}
            FormErrorMessage={FormErrorMessage}
            {...props}
            dataPending={dataPending}
            dataError={dataError}
            dataErrorMessage={dataErrorMessage}
          />
        )}
      </Formik>
    </div>
  );
}
