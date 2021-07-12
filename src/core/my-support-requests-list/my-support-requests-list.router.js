import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { MY_SUPPORT_REQUESTS_LIST_ROUTE_PATH } from './my-support-requests-list.constant';

export function mySupportRequestsListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_SUPPORT_REQUESTS_LIST_ROUTE_PATH));
}
