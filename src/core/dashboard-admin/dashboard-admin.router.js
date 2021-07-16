import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  DASHBOARD_ADMIN_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './dashboard-admin.constant';

export function dashboardAdminRouter(ctx) {
  ctx.store.dispatch(setActivePath(DASHBOARD_ADMIN_ROUTE_PATH));
}
