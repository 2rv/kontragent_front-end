import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  MY_COMPANIES_ADD_COMPANY_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './my-companies-add-company.constant';

export function myCompaniesAddCompanyRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_COMPANIES_ADD_COMPANY_ROUTE_PATH));
}
