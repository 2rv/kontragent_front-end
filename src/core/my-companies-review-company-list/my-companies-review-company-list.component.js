import { ReviewCompanyListContainer } from './frame/review-company-list';
import { ReviewCompanyListFooterContainer } from './frame/review-company-list-footer';
import { SectionLayout } from '../../lib/elements/layout';
export function MyCompaniesReviewCompanyListComponent(props) {
  return (
    <SectionLayout>
      <ReviewCompanyListContainer data={props.data} />
      <ReviewCompanyListFooterContainer />
    </SectionLayout>
  );
}
