import { SectionLayout } from '../../lib/elements/layout';

import { ArbitrageRequestListContainer } from './frame/arbitrage-request-list';

export function ArbitrageUserRequestListComponent(props) {
  return (
    <SectionLayout>
      {props.listData.map((data, index) => (
        <ArbitrageRequestListContainer data={data} key={index} />
      ))}
    </SectionLayout>
  );
}
