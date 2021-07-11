import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  MY_REQUESTS_JURISTS_LIST_ROUTE_PATH,
  MY_REQUESTS_JURISTS_LIST_REDIRECT_ON_LOGGED_PATH,
} from './my-requests-jurists-list.constant';

export function myRequestsJuristsListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_REQUESTS_JURISTS_LIST_ROUTE_PATH));
  authRedirectLogged(ctx, MY_REQUESTS_JURISTS_LIST_REDIRECT_ON_LOGGED_PATH);
}
