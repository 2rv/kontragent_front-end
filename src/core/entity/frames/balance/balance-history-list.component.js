import styled from 'styled-components';
import { PrimaryBox } from '../../../../lib/elements/box';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { BalanceHistoryListItem } from './balance-history-list-item.component';

export function BalanceHistoryListComponent(props) {
  const { balanceHistoryListData } = props;
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <CompanySpendingHistoryTitle tid="ENTITY.BALANCE.COMPANY_SPENDING_HISTORY" />
          <List>
            {balanceHistoryListData.map((data, index) => (
              <BalanceHistoryListItem data={data} key={index} />
            ))}
          </List>
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing(4)} 0;
  flex-grow: 1;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
const CompanySpendingHistoryTitle = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
