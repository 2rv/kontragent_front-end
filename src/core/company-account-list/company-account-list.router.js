import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from './company-account-list.constant';

export function CompanyAccountListRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_LIST_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
}