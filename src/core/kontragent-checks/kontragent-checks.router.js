import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { KONTRAGENT_CHECKS_ROUTE_PATH } from './kontragent-checks.constant';

export function KontragentChecksRouter(ctx) {
  ctx.store.dispatch(setActivePath(KONTRAGENT_CHECKS_ROUTE_PATH));
}
