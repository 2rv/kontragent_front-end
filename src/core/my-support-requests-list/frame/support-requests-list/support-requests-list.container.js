import { SupportRequestsListComponent } from './support-requests-list.component';

export function SupportRequestsListContainer(props) {
  const { mySupportRequestsListData } = props;
  return (
    <SupportRequestsListComponent
      mySupportRequestsListData={mySupportRequestsListData}
    />
  );
}
