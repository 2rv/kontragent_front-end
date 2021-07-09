import styled from 'styled-components';

import { HeaderComponent } from './frame/header';
import { ArbitrationCasesListComponent } from './frame/arbitration-cases-list';

import { ARBITRATION_CASES_LIST } from './arbitration-cases.constant';

import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { spacing } from '../../lib/theme';

export function ArbitrationCasesComponent() {
  return (
    <Box>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent />
          <ArbitrationCasesListComponent arbitrationCasesList={ARBITRATION_CASES_LIST} />
        </SectionLayout>
      </IndentLayout>
    </Box>
  );
}

const Box = styled(PrimaryBox)`
  margin: ${spacing(7)};
`;
