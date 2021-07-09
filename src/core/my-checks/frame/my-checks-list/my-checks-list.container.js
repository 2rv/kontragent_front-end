import { MyChecksListComponent } from './my-checks-list.component';

export function MyChecksListContainer(props) {
  const { itemsData } = props;
  return <MyChecksListComponent itemsData={itemsData} />;
}
