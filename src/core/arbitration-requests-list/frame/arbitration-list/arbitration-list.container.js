import { ArbitrationListComponent } from './arbitration-list.component';

export function ArbitrationListContainer(props) {
  const { arbitrationListData } = props;
  return <ArbitrationListComponent arbitrationListData={arbitrationListData} />;
}
