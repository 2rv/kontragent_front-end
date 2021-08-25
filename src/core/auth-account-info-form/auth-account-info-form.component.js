import { AccountInfoFormContainer } from './frame/account-info-form';
import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { AccountInfoFooterContainer } from './frame/account-info-footer';
import { AccountInfoHeaderContainer } from './frame/account-info-header';

export function AuthAccoutInfoFormComponent(props) {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <AccountInfoHeaderContainer />
          <AccountInfoFormContainer {...props} />
          <AccountInfoFooterContainer />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
