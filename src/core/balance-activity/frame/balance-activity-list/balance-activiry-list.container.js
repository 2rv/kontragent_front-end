import { BalanceActivityListComponent } from './balance-activiry-list.component';

export function BalanceActivityListContainer(props) {
  const { balanceActivityListData } = props;
  return (
    <BalanceActivityListComponent
      balanceActivityListData={balanceActivityListData}
    />
  );
}
