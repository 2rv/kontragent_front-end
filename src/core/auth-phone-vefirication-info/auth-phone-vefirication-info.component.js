import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { PhoneVerificationInfoHeaderContainer } from './frame/phone-vefirication-info-header';
import { PhoneVerificationInfoContainer } from './frame/phone-vefirication-info-form';
import { PhoneVerificationInfoFooterContainer } from './frame/phone-vefirication-info-footer';

export function AuthPhoneVerificationInfoComponent(props) {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <PhoneVerificationInfoHeaderContainer />
          <PhoneVerificationInfoContainer
            phoneNumber={props.phoneNumber}
            initialValue={props.initialValue}
          />
          <PhoneVerificationInfoFooterContainer />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
