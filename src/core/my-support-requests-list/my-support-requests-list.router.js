import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  MY_SUPPORT_REQUESTS_LIST_ROUTE_PATH,
  MY_SUPPORT_REQUESTS_LIST_REDIRECT_ON_LOGGED_PATH,
} from './my-support-requests-list.constant';

export function mySupportRequestsListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_SUPPORT_REQUESTS_LIST_ROUTE_PATH));
  authRedirectLogged(ctx, MY_SUPPORT_REQUESTS_LIST_REDIRECT_ON_LOGGED_PATH);
}
