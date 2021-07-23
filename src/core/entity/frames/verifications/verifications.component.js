import styled from 'styled-components';
import { HeaderComponent } from '../header';
import { VerificationsListComponent } from './frame/verifications-list';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { spacing } from '../../../../lib/theme';

export function VerificationsComponent(props) {
  const { verificationListData } = props;
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout type="LARGE">
          <HeaderComponent
            title="COUNTERPARTY.VERIFICATIONS.HEADER.TITLE"
            companyType="COUNTERPARTY.VERIFICATIONS.HEADER.COMPANY_TYPE"
            companyName={'"Компания Гермес-Электро"'}
          />
          <VerificationsListComponent
            verificationListData={verificationListData}
          />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
