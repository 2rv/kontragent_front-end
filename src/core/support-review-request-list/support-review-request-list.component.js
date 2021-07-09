import { SupportRequestListContainer } from './frame/support-request-list';
export function SupportReviewRequestListComponent(props) {
  return (
    <SupportRequestListContainer
      supportRequestListData={props.supportRequestListData}
    />
  );
}
