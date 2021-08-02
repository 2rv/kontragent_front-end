import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  MY_COMPANIES_REVIEW_COMPANY_LIST_ROUTE_PATH,
  MY_COMPANIES_REVIEW_COMPANY_LIST_REDIRECT_ON_LOGGED_PATH,
} from './my-companies-review-company-list.constant';

export function myCompaniesReviewCompanyListRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(MY_COMPANIES_REVIEW_COMPANY_LIST_ROUTE_PATH),
  );
  authRedirectPrivated(
    ctx,
    MY_COMPANIES_REVIEW_COMPANY_LIST_REDIRECT_ON_LOGGED_PATH,
  );
}
