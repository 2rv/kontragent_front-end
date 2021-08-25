import styled from 'styled-components';
import {
  SecondaryText,
  PrimaryText,
  PrimaryTitleText,
} from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryBox } from '../../../../lib/elements/box';
import { BalanceActivityListItemComponent } from './balance-activiry-list-item.component';

export function BalanceActivityListComponent(props) {
  const { balanceActivityListData } = props;
  return (
    <List>
      {balanceActivityListData.map((data, index) => (
        <BalanceActivityListItemComponent key={index} data={data} />
      ))}
    </List>
  );
}
const List = styled(PrimaryBox)`
  display: flex;
  flex-direction: column;
  padding: ${spacing(4)} 0;
  height: fit-content;
  min-width: max-content;
  min-height: 0;
  overflow: auto;
`;
