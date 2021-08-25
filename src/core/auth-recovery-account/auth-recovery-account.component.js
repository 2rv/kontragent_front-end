import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout } from '../../lib/elements/layout';

import { AuthFormRecoveryAccountContainer } from './frame/auth-form-recovery-account';

export function AuthRecoveryAccountComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    validation,
    onSubmitForm,
    fieldName,
    isError,
    isSuccess,
    errorMessage,
  } = props;

  return (
    <PrimaryBox>
      <IndentLayout>
        <AuthFormRecoveryAccountContainer
          initialValue={initialValue}
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          validation={validation}
          onSubmitForm={onSubmitForm}
          fieldName={fieldName}
        />
      </IndentLayout>
    </PrimaryBox>
  );
}
