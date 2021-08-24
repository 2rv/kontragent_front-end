import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  MY_COMPANIES_ADD_COMPANY_ROUTE_PATH,
  MY_COMPANIES_ADD_COMPANY_PRIVATED_REDIRECT_PATH,
} from './my-companies-add-company.constant';

export function myCompaniesAddCompanyRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_COMPANIES_ADD_COMPANY_ROUTE_PATH));
  //   authRedirectPrivated(ctx, MY_COMPANIES_ADD_COMPANY_PRIVATED_REDIRECT_PATH);
}
