import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  MY_VERIFICATION_REQUESTS_LIST_ROUTE_PATH,
  MY_VERIFICATION_REQUESTS_LIST_REDIRECT_ON_LOGGED_PATH,
} from './my-verification-requests-list.constant';

export function myVerificationRequestsListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_VERIFICATION_REQUESTS_LIST_ROUTE_PATH));
  authRedirectLogged(
    ctx,
    MY_VERIFICATION_REQUESTS_LIST_REDIRECT_ON_LOGGED_PATH,
  );
}
