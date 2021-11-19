import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectAdmin,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH } from './company-account-item-balance.constant';

export function CompanyAccountItemBalanceRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  if (authRedirectPrivated(ctx, '/')) return;
  authRedirectVerification(ctx);
  if (authRedirectVerification(ctx)) return;
  authRedirectAdmin(ctx, '/');
  if (authRedirectAdmin(ctx, '/')) return;
}
