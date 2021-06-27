import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { SignupHeaderContainer } from './frame/signup-header';
import { SignupFormContainer } from './frame/signup-form';
import { SignupFooterContainer } from './frame/signup-footer';
import { PrimaryChatPreview } from '../../lib/elements/chat-preview';
import { PrimaryDivider } from '../../lib/elements/divider';

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
    <>
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
      <PrimaryDivider />
      <PrimaryChatPreview
        id={0}
        status={'Агент'}
        numberOfUnread={5}
        image="https://via.placeholder.com/100"
        name="Davit Harutyunyan"
        messageFragmet="Да так, просто"
        date="вчера"
      />
    </>
  );
}
