import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ADMIN_LIST_ROUTE_PATH } from './company-admin-list.constant';

export function CompanyAdminListRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ADMIN_LIST_ROUTE_PATH));
  authRedirectVerification(ctx);
  if (authRedirectVerification(ctx)) return;
  authRedirectPrivated(ctx, '/');
  if (authRedirectPrivated(ctx, '/')) return;
  authRedirectNotAdmin(ctx, '/');
  if (authRedirectNotAdmin(ctx, '/')) return;
}
