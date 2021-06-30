import { SectionLayout } from '../../../../lib/elements/layout';
import { InspectionRequestListItem } from './inspection-request-list.item';
export function InspectionRequestListComponent(props) {
  return (
    <SectionLayout>
      {props.inspectionRequestListData.map((inspectionRequest, index) => (
        <InspectionRequestListItem
          key={index}
          company={inspectionRequest.company}
          inspectionTypeId={inspectionRequest.inspectionTypeId}
          inspectionType={inspectionRequest.inspectionType}
          sum={inspectionRequest.sum}
          date={inspectionRequest.date}
          inspectionStatusId={inspectionRequest.inspectionStatusId}
          inspectionStatus={inspectionRequest.inspectionStatus}
          payed={inspectionRequest.payed}
        />
      ))}
    </SectionLayout>
  );
}
