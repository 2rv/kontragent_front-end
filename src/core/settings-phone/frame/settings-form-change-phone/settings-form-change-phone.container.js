import { Formik } from 'formik';
import { SettingsFormChangePhoneComponent } from './settings-form-change-phone.component';

import { SETTINGS_FORM_CHANGE_PHONE_FIELD_KEY } from './settings-form-change-phone.type';

export function SettingsFormChangePhoneContainer(props) {
  const {
    enableReinitialize,
    validation,
    onSubmitForm,
    initialValue,
    settingsPhoneFieldName,
    pageLoading,

    FormPending,
    FormError,
    FormSuccess,
    FormErrorMessage,

    dataPending,
    dataError,
    dataErrorMessage,
  } = props;

  const PHONE_NUMBER_NAME =
      settingsPhoneFieldName[SETTINGS_FORM_CHANGE_PHONE_FIELD_KEY.PHONE_NUMBER],
    PASSWORD_NAME =
      settingsPhoneFieldName[SETTINGS_FORM_CHANGE_PHONE_FIELD_KEY.PASSWORD];

  return (
    <div>
      <Formik
        enableReinitialize={enableReinitialize}
        initialValues={initialValue}
        validate={validation}
        onSubmit={(values, { resetForm }) => {
          onSubmitForm(values, resetForm);
        }}
      >
        {(props) => (
          <SettingsFormChangePhoneComponent
            fieldPhoneNumber={PHONE_NUMBER_NAME}
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
