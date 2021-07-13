import { HeaderComponent } from './frame/header';
import { ArbitrationCasesListComponent } from './frame/arbitration-cases-list';

import { ARBITRATION_CASES_LIST } from './arbitration-cases.constant';

import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import styled from 'styled-components';
import { spacing } from '../../lib/theme';

export function ArbitrationCasesComponent() {
  return (
    <Container>
      <HeaderComponent />
      <SectionLayout>
        <ArbitrationCasesListComponent
          arbitrationCasesList={ARBITRATION_CASES_LIST}
        />
      </SectionLayout>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${spacing(6)};
`;
