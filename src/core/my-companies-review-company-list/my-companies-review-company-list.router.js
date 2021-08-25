import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  MY_COMPANIES_REVIEW_COMPANY_LIST_ROUTE_PATH,
  REDIRECT_ON_MAIN_PAGE,
} from './my-companies-review-company-list.constant';

export function myCompaniesReviewCompanyListRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(MY_COMPANIES_REVIEW_COMPANY_LIST_ROUTE_PATH),
  );
  //   authRedirectPrivated(ctx, REDIRECT_ON_MAIN_PAGE);
}
