import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout } from '../../lib/elements/layout';

import { AuthFormVerificationEmailContainer } from './frame/auth-form-verification-email';

export function AuthVerificationEmailComponent(props) {
  const { pageLoading, isPending, isError, errorMessage, sendCode } = props;

  return (
    <PrimaryBox>
      <IndentLayout>
        <AuthFormVerificationEmailContainer
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          errorMessage={errorMessage}
          sendCode={sendCode}
        />
      </IndentLayout>
    </PrimaryBox>
  );
}
