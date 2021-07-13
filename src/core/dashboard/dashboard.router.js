import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  DASHBOARD_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './dashboard.constant';

export function dashboardRouter(ctx) {
  ctx.store.dispatch(setActivePath(DASHBOARD_ROUTE_PATH));
}
