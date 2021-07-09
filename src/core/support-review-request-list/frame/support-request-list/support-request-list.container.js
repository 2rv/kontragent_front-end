import { SupportRequestListComponent } from './support-request-list.component';

export function SupportRequestListContainer(props) {
  const { supportRequestListData } = props;
  return (
    <SupportRequestListComponent
      supportRequestListData={supportRequestListData}
    />
  );
}
