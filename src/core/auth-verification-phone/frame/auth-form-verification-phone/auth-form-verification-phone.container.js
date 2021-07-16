import { AuthFormVerificationPhoneComponent } from './auth-form-verification-phone.component';

export function AuthFormVerificationPhoneContainer(props) {
  const {
    pageLoading,
    sendCodePending,
    sendCodeSuccess,
    sendCodeError,
    sendCodeErrorMessage,
    sendCode,
    phone,
  } = props;
  return (
    <AuthFormVerificationPhoneComponent
      pageLoading={pageLoading}
      sendCodePending={sendCodePending}
      sendCodeSuccess={sendCodeSuccess}
      sendCodeError={sendCodeError}
      sendCodeErrorMessage={sendCodeErrorMessage}
      sendCode={sendCode}
      phone={phone}
    />
  );
}
