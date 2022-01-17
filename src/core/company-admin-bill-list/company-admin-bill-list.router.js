import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ADMIN_BILL_LIST_ROUTE_PATH } from './company-admin-bill-list.constant';

export function CompanyAdminItemBillListRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ADMIN_BILL_LIST_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
  if (authRedirectNotAdmin(ctx, '/')) return;
}
