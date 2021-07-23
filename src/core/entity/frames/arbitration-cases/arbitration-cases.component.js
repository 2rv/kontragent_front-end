import styled from 'styled-components';
import { HeaderComponent } from '../header';
import { ArbitrationCasesListComponent } from './arbitration-cases-list.component';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { spacing } from '../../../../lib/theme';

export function ArbitrationCasesComponent(props) {
  const { arbitrationCasesListData } = props;
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout type="LARGE">
          <HeaderComponent
            title="COUNTERPARTY.ARBITRATION_CASES.HEADER.TITLE"
            companyType="COUNTERPARTY.ARBITRATION_CASES.HEADER.COMPANY_TYPE"
            companyName={'"Компания Гермес-Электро"'}
          />
          <ArbitrationCasesListComponent
            arbitrationCasesListData={arbitrationCasesListData}
          />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
