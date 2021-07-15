import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { BALANCE_ACTIVITY_ROUTE_PATH } from './balance-activity.constant';

export function balanceActivityRouter(ctx) {
  ctx.store.dispatch(setActivePath(BALANCE_ACTIVITY_ROUTE_PATH));
}
