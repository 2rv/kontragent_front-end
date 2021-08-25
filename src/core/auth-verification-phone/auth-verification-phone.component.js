import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

import { AuthFormVerificationPhoneContainer } from './frame/auth-form-verification-phone';
import { AuthFormVerificationPhoneConfirmContainer } from './frame/auth-form-verification-phone-confirm';

export function AuthVerificationPhoneComponent(props) {
  const {
    pageLoading,

    sendCodePending,
    sendCodeSuccess,
    sendCodeError,
    sendCodeErrorMessage,
    sendCode,
    phone,

    fieldName,
    initialValue,
    validation,
    onSubmitForm,
    confirmCodePending,
    confirmCodeSuccess,
    confirmCodeError,
    confirmCodeErrorMessage,
  } = props;

  return (
    <SectionLayout>
      <PrimaryBox>
        <IndentLayout>
          <AuthFormVerificationPhoneContainer
            pageLoading={pageLoading}
            sendCodePending={sendCodePending}
            sendCodeSuccess={sendCodeSuccess}
            sendCodeError={sendCodeError}
            sendCodeErrorMessage={sendCodeErrorMessage}
            sendCode={sendCode}
            phone={phone}
          />
        </IndentLayout>
      </PrimaryBox>
      <PrimaryBox>
        <IndentLayout>
          <AuthFormVerificationPhoneConfirmContainer
            pageLoading={pageLoading}
            fieldName={fieldName}
            initialValue={initialValue}
            validation={validation}
            onSubmitForm={onSubmitForm}
            confirmCodePending={confirmCodePending}
            confirmCodeSuccess={confirmCodeSuccess}
            confirmCodeError={confirmCodeError}
            confirmCodeErrorMessage={confirmCodeErrorMessage}
          />
        </IndentLayout>
      </PrimaryBox>
    </SectionLayout>
  );
}
