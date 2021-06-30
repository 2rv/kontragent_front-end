import { SectionLayout } from '../../../../lib/elements/layout';
import { SupportRequestListItem } from './support-request-list.item';
export function SupportRequestListComponent(props) {
  return (
    <SectionLayout>
      {props.supportRequestListData.map((supportRequest) => (
        <SupportRequestListItem
          problemTid={supportRequest.problemTid}
          requestCause={supportRequest.requestCause}
          requestStatusId={supportRequest.requestStatusId}
          date={supportRequest.date}
          status={supportRequest.status}
        />
      ))}
    </SectionLayout>
  );
}
