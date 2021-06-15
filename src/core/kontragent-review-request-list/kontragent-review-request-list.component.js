import { SectionLayout } from '../../lib/elements/layout';

import { ReviewRequestListContainer } from './frame/review-request-list';

export function KontragentReviewRequestListComponent(props) {
  return (
    <SectionLayout>
      {props.listData.map((data, index) => (
        <ReviewRequestListContainer data={data} key={index} />
      ))}
    </SectionLayout>
  );
}
