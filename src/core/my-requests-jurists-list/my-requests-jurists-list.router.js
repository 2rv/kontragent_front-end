import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { MY_REQUESTS_JURISTS_LIST_ROUTE_PATH } from './my-requests-jurists-list.constant';

export function MyRequestsJuristsListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_REQUESTS_JURISTS_LIST_ROUTE_PATH));
}
