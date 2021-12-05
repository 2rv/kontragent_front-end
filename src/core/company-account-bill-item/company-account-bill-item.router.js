import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectAdmin,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ACCOUNT_BILL_ITEM_ROUTE_PATH } from './company-account-bill-item.constant';

export function CompanyAccountBillItemRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_BILL_ITEM_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
  if (authRedirectAdmin(ctx, '/')) return;
}
