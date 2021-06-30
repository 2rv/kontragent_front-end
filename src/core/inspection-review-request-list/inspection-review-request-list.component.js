import { InspectionRequestListContainer } from './frame/inspection-request-list';
export function InspectionReviewRequestListComponent(props) {
  return (
    <InspectionRequestListContainer
      inspectionRequestListData={props.inspectionRequestListData}
    />
  );
}
