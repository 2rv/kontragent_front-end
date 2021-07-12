import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { ARBITRATION_REQUESTS_LIST_ROUTE_PATH } from './arbitration-requests-list.constant';

export function arbitrationRequestsListRouter(ctx) {
  ctx.store.dispatch(setActivePath(ARBITRATION_REQUESTS_LIST_ROUTE_PATH));
}
