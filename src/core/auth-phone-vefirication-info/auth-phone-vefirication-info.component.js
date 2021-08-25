import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { PhoneVerificationInfoHeaderContainer } from './frame/phone-vefirication-info-header';
import { PhoneVerificationInfoFormContainer } from './frame/phone-vefirication-info-form';
import { PhoneVerificationInfoFooterContainer } from './frame/phone-vefirication-info-footer';

export function AuthPhoneVerificationInfoComponent(props) {
  const {
    phoneNumber,
    initialValue,
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    phoneVerificationInfoFormFieldName,
  } = props;
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <PhoneVerificationInfoHeaderContainer />
          <PhoneVerificationInfoFormContainer
            phoneNumber={phoneNumber}
            phoneVerificationInfoFormFieldName={
              phoneVerificationInfoFormFieldName
            }
            initialValue={initialValue}
            pageLoading={pageLoading}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
          />
          <PhoneVerificationInfoFooterContainer />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
