import { setActivePath } from '../../lib/common/navigation/navigation.action';

import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH } from './user-admin-item-company-list.constant';

export function UserAdminItemCompanyListRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  if (authRedirectPrivated(ctx, '/')) return;
  authRedirectVerification(ctx);
  if (authRedirectVerification(ctx)) return;
  authRedirectNotAdmin(ctx);
  if (authRedirectNotAdmin(ctx)) return;
}
