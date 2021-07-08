import { RequestListItemComponent } from './request-list-item.component';

export function RequestsListComponent({ requestsList }) {
  return (
    requestsList.map((request) => (
      <RequestListItemComponent key={request.id} {...request} />
    ))
  );
}
