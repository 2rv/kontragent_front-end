import { Formik } from 'formik';
import { SettingsFormChangePasswordComponent } from './settings-form-change-password.component';

import { SETTINGS_FORM_CHANGE_PASSWORD_FIELD_KEY } from './settings-form-change-password.type';

export function SettingsFormChangePasswordContainer(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settingsPasswordFieldName,
  } = props;

  const NEW_PASSWORD =
      settingsPasswordFieldName[
        SETTINGS_FORM_CHANGE_PASSWORD_FIELD_KEY.NEW_PASSWORD
      ],
    REPEAT_NEW_PASSWORD =
      settingsPasswordFieldName[
        SETTINGS_FORM_CHANGE_PASSWORD_FIELD_KEY.REPEAT_NEW_PASSWORD
      ],
    OLD_PASSWORD =
      settingsPasswordFieldName[
        SETTINGS_FORM_CHANGE_PASSWORD_FIELD_KEY.OLD_PASSWORD
      ];

  return (
    <Formik initialValues={initialValue}>
      {(props) => (
        <SettingsFormChangePasswordComponent
          fieldNewPassword={NEW_PASSWORD}
          fieldRepeatNewPassword={REPEAT_NEW_PASSWORD}
          fieldOldPassword={OLD_PASSWORD}
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
