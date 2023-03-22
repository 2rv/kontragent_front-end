import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { BILL_ADMIN_LIST_ROUTE_PATH } from './bill-admin-list.constant';

export function BillAdminListRouter(ctx) {
  ctx.store.dispatch(setActivePath(BILL_ADMIN_LIST_ROUTE_PATH));
  if (authRedirectVerification(ctx)) return;
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectNotAdmin(ctx, '/')) return;
}
