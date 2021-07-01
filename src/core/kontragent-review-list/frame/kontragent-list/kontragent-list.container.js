import { KontragentListComponent } from './kontragent-list.component';
export function KontragentListContainer(props) {
  return (
    <KontragentListComponent kontragentListData={props.kontragentListData} />
  );
}
