import styled from 'styled-components';

import { ArbitrationCasesListComponent } from './frame/arbitration-cases-list';
import { HeaderComponent } from '../header';
import { ARBITRATION_CASES_LIST } from './arbitration-cases.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function ArbitrationCasesComponent() {
  return (
    <Container>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent
            title="Арбитражные дела"
            companyType="Общество с ограниченной ответственностью"
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
