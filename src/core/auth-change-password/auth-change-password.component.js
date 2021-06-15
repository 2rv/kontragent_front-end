import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

import { AuthChangePasswordHeaderContainer } from './frame/auth-change-password-header';
import { AuthChangePasswordFormContainer } from './frame/auth-change-password-form';

export function AuthChangePasswordComponent(props) {
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
        <SectionLayout>
          <AuthChangePasswordHeaderContainer />
          <AuthChangePasswordFormContainer
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
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
