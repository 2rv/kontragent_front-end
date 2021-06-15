import { AuthFormVerificationEmailComponent } from './auth-form-verification-email.component';

export function AuthFormVerificationEmailContainer(props) {
  const { isPending, isError, errorMessage, pageLoading, sendCode } = props;
  return (
    <AuthFormVerificationEmailComponent
      isPending={isPending}
      isError={isError}
      errorMessage={errorMessage}
      pageLoading={pageLoading}
      sendCode={sendCode}
    />
  );
}
