import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { ArbitrationCasesListComponent } from './frame/arbitration-cases-list';

import { ARBITRATION_CASES_LIST } from './arbitration-cases.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function ArbitrationCasesComponent() {
  return (
    <Container>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent
            title="COUNTERPARTY.ARBITRATION_CASES.HEADER.TITLE"
            companyType="COUNTERPARTY.ARBITRATION_CASES.HEADER.COMPANY_TYPE"
            companyName={'"Компания Гермес-Электро"'}
          />
          <ArbitrationCasesListComponent arbitrationCasesList={ARBITRATION_CASES_LIST} />
        </SectionLayout>
      </IndentLayout>
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  width: 100%;
  height: fit-content;
`;
