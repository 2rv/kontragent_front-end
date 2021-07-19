import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { ArbitrationCasesListComponent } from './frame/arbitration-cases-list';

import { ARBITRATION_CASES_LIST } from './arbitration-cases.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { spacing } from '../../../../lib/theme';

export function ArbitrationCasesComponent() {
  return (
    <Container>
      <HeaderComponent
        title="COUNTERPARTY.ARBITRATION_CASES.HEADER.TITLE"
        companyType="COUNTERPARTY.ARBITRATION_CASES.HEADER.COMPANY_TYPE"
        companyName={'"Компания Гермес-Электро"'}
      />
      <List>
        {ARBITRATION_CASES_LIST.map((data, index) => (
          <ArbitrationCasesListComponent data={data} key={index} />
        ))}
      </List>
    </Container>
  );
}
const List = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  padding-right: ${spacing(2)};
`;
const Container = styled(PrimaryBox)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  padding: ${spacing(8)};
  padding-right: ${spacing(2)};
  gap: ${spacing(6)};
`;
