import { InspectionRequestListComponent } from './inspection-request-list.component';
export function InspectionRequestListContainer(props) {
  return (
    <InspectionRequestListComponent
      inspectionRequestListData={props.inspectionRequestListData}
    />
  );
}
