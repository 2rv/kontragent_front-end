import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { MY_COMPANIES_ADD_COMPANY_ROUTE_PATH } from './my-companies-add-company.constant';

export function myCompaniesAddCompanyRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_COMPANIES_ADD_COMPANY_ROUTE_PATH));
}
