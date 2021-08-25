import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { LAWYER_REQUEST_ROUTE_PATH } from './lawyer-request.constant';

export function lawyerRequestRouter(ctx) {
  ctx.store.dispatch(setActivePath(LAWYER_REQUEST_ROUTE_PATH));
}
