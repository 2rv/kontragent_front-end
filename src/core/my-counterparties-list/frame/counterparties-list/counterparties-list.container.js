import { CounterpartiesListComponent } from './counterparties-list.component';
export function CounterpartiesListContainer(props) {
  const { myCounterpartiesListData } = props;
  return (
    <CounterpartiesListComponent
      myCounterpartiesListData={myCounterpartiesListData}
    />
  );
}
