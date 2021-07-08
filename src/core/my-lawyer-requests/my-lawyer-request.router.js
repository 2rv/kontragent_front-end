import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { MY_LAWYER_REQUESTS_ROUTE_PATH } from './my-lawyer-requests.constant';

export function LawyerRequestRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_LAWYER_REQUESTS_ROUTE_PATH));
}
