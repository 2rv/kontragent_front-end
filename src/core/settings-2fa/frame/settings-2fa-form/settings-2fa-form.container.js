import { Formik } from 'formik';
import { Settings2FAFormComponent } from './settings-2fa-form.component';

import { SETTINGS_2FA_FORM_FIELD_KEY } from './settings-2fa-form.type';

export function Settings2FAFormContainer(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settings2faFormFieldName,
  } = props;

  const PHONE_NUMBER =
    settings2faFormFieldName[SETTINGS_2FA_FORM_FIELD_KEY.PHONE_NUMBER];

  return (
    <div>
      <Formik initialValues={{ initialValue }}>
        {(props) => (
          <Settings2FAFormComponent
            fieldPhoneNumber={PHONE_NUMBER}
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
