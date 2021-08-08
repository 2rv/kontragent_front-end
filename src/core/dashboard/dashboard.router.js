import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  DASHBOARD_ROUTE_PATH,
  DASHBOARD_ROUTE_PRIVATE_PATH,
} from './dashboard.constant';

export function dashboardRouter(ctx) {
  ctx.store.dispatch(setActivePath(DASHBOARD_ROUTE_PATH));
  authRedirectPrivated(ctx, DASHBOARD_ROUTE_PRIVATE_PATH);
}
