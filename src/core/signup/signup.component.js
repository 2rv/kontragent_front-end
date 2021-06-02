import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { SignupHeaderContainer } from './frame/signup-header';
import { SignupFormContainer } from './frame/signup-form';
import { SignupFooterContainer } from './frame/signup-footer';

export function SignupComponent(props) {
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
          <SignupHeaderContainer />
          <SignupFormContainer
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
          <SignupFooterContainer />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
