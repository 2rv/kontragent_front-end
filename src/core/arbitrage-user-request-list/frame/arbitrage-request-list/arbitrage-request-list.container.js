import { ArbitrageRequestListComponent } from './arbitrage-request-list.component';

export function ArbitrageRequestListContainer(props) {
  return <ArbitrageRequestListComponent listData={props.listData} />;
}
