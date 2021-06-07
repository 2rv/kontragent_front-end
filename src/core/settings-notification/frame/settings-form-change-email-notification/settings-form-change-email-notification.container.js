import { Formik } from 'formik';
import { SettingsFormChangeNotificationComponent } from './settings-form-change-email-notification.component';

import { SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_KEY } from './settings-form-change-email-notification.type';

export function SettingsFormChangeNotificationContainer(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settingsNotificationFieldName,
  } = props;

  const EMAIL =
    settingsNotificationFieldName[
      SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_KEY.EMAIL
    ];
  return (
    <div>
      <Formik initialValues={initialValue}>
        {(props) => (
          <SettingsFormChangeNotificationComponent
            fieldEmail={EMAIL}
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
