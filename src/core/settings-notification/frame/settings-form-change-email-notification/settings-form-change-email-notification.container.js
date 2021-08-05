import { Formik } from 'formik';
import { SettingsFormChangeNotificationComponent } from './settings-form-change-email-notification.component';

import { SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_KEY } from './settings-form-change-email-notification.type';

export function SettingsFormChangeNotificationContainer(props) {
  const {
    pageLoading,

    dataPending,
    dataError,
    dataErrorMessage,

    FormPending,
    FormError,
    FormSuccess,
    FormErrorMessage,

    settingsNotificationFieldName,
    enableReinitialize,
    initialValue,
    onSubmitForm,
    validation,
  } = props;

  const EMAIL =
    settingsNotificationFieldName[
      SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_KEY.EMAIL
    ];

  return (
    <div>
      <Formik
        enableReinitialize={enableReinitialize}
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(props) => (
          <SettingsFormChangeNotificationComponent
            fieldEmail={EMAIL}
            pageLoading={pageLoading}
            dataPending={dataPending}
            dataError={dataError}
            dataErrorMessage={dataErrorMessage}
            FormPending={FormPending}
            FormError={FormError}
            FormSuccess={FormSuccess}
            FormErrorMessage={FormErrorMessage}
            {...props}
          />
        )}
      </Formik>
    </div>
  );
}
