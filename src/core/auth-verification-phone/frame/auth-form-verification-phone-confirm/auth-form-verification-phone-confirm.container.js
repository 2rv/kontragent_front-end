import { Formik } from 'formik';
import { AuthFormVerificationPhoneConfirmComponent } from './auth-form-verification-phone-confirm.component';
import { AUTH_FORM_VERIFICATION_PHONE_CONFIRM_FIELD_KEY } from './auth-form-verification-phone-confirm.type';

export function AuthFormVerificationPhoneConfirmContainer(props) {
  const {
    pageLoading,
    fieldName,
    initialValue,
    validation,
    onSubmitForm,
    confirmCodePending,
    confirmCodeSuccess,
    confirmCodeError,
    confirmCodeErrorMessage,
  } = props;
  const CODE_NAME =
    fieldName[AUTH_FORM_VERIFICATION_PHONE_CONFIRM_FIELD_KEY.CODE];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(props) => (
        <AuthFormVerificationPhoneConfirmComponent
          fieldCode={CODE_NAME}
          {...props}
          confirmCodePending={confirmCodePending}
          confirmCodeError={confirmCodeError}
          confirmCodeSuccess={confirmCodeSuccess}
          confirmCodeErrorMessage={confirmCodeErrorMessage}
          pageLoading={pageLoading}
        />
      )}
    </Formik>
  );
}
