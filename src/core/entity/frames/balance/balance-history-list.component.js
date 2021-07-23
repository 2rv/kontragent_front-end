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
      <SectionLayout type="LARGE">
        <CompanySpendingHistoryTitle tid="ENTITY.BALANCE.COMPANY_SPENDING_HISTORY" />
        <List>
          {balanceHistoryListData.map((data, index) => (
            <BalanceHistoryListItem data={data} key={index} />
          ))}
        </List>
      </SectionLayout>
    </PrimaryBox>
  );
}
const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const CompanySpendingHistoryTitle = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  padding: ${spacing(8)} ${spacing(8)} 0 ${spacing(8)};
`;
