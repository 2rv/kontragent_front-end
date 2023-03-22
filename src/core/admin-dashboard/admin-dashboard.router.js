import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { ADMIN_DASHBOARD_ROUTE_PATH } from './admin-dashboard.constant';

export function AdminDashboardRouter(ctx) {
  ctx.store.dispatch(setActivePath(ADMIN_DASHBOARD_ROUTE_PATH));
  if (authRedirectVerification(ctx)) return;
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectNotAdmin(ctx, '/')) return;
}
