import { ReviewRequestListComponent } from './review-request-list.component';

export function ReviewRequestListContainer(props) {
  return <ReviewRequestListComponent data={props.data} />;
}
