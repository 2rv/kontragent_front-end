import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated, authRedirectAdmin } from '../../lib/common/auth';
import { redirectUnavailableCompanyPage } from '../../lib/common/auth';
import { COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH } from './company-account-item-balance.constant';
export function CompanyAccountItemBalanceRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH));
  authRedirectAdmin(ctx, '/')
  authRedirectPrivated(ctx, '/');
  redirectUnavailableCompanyPage(ctx, '/');
}
