import { SupportRequestListComponent } from './support-request-list.component';
export function SupportRequestListContainer(props) {
  return (
    <SupportRequestListComponent
      supportRequestListData={props.supportRequestListData}
    />
  );
}
