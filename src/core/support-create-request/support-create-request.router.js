import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { SUPPORT_CREATE_REQUEST_ROUTE_PATH } from './support-create-request.constant';
export function SupportCreateRequestRouter(ctx) {
  ctx.store.dispatch(setActivePath(SUPPORT_CREATE_REQUEST_ROUTE_PATH));
}
