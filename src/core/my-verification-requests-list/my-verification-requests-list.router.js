import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { MY_VERIFICATION_REQUESTS_LIST_ROUTE_PATH } from './my-verification-requests-list.constant';

export function myVerificationRequestsListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_VERIFICATION_REQUESTS_LIST_ROUTE_PATH));
}
