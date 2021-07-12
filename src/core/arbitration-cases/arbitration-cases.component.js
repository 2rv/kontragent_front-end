import { HeaderComponent } from './frame/header';
import { ArbitrationCasesListComponent } from './frame/arbitration-cases-list';

import { ARBITRATION_CASES_LIST } from './arbitration-cases.constant';

import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';

export function ArbitrationCasesComponent() {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout type="LARGE">
          <HeaderComponent />
          <SectionLayout>
            <ArbitrationCasesListComponent
              arbitrationCasesList={ARBITRATION_CASES_LIST}
            />
          </SectionLayout>
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
