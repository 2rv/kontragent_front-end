import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { MY_LAWYER_REQUEST_LIST_ROUTE_PATH } from './my-lawyer-request-list.constant';

export function myLawyerRequestListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_LAWYER_REQUEST_LIST_ROUTE_PATH));
}
