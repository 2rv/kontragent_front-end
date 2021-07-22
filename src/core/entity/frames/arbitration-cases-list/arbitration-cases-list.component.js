import styled from 'styled-components';
import { HeaderComponent } from '../header';
import { ArbitrationCasesListItemComponent } from './arbitration-cases-list-item.component';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { spacing } from '../../../../lib/theme';

export function ArbitrationCasesListComponent(props) {
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
          <List>
            {arbitrationCasesListData.map((data, index) => (
              <ArbitrationCasesListItemComponent data={data} key={index} />
            ))}
          </List>
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
const List = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
`;
