import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { VerificationsListComponent } from './frame/verifications-list';

import { VERIFICATIONS_LIST } from './verifications.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { spacing } from '../../../../lib/theme';

export function VerificationsComponent() {
  return (
    <Container>
      <HeaderComponent
        title="COUNTERPARTY.VERIFICATIONS.HEADER.TITLE"
        companyType="COUNTERPARTY.VERIFICATIONS.HEADER.COMPANY_TYPE"
        companyName={'"Компания Гермес-Электро"'}
      />
      <List>
        {VERIFICATIONS_LIST.map((data, index) => (
          <VerificationsListComponent data={data} key={index} />
        ))}
      </List>
    </Container>
  );
}

const List = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  min-width: max-content;
  padding-right: ${spacing(2)};
`;
const Container = styled(PrimaryBox)`
  display: flex;
  flex-direction: column;
  padding: ${spacing(8)};
  padding-right: ${spacing(2)};
  gap: ${spacing(6)};
  flex: 0 0 auto;
`;
