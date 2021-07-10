import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  ARBITRATION_REQUESTS_LIST_ROUTE_PATH,
  ARBITRATION_REQUESTS_LIST_REDIRECT_ON_LOGGED_PATH,
} from './arbitration-requests-list.constant';

export function arbitrationRequestsListRouter(ctx) {
  ctx.store.dispatch(setActivePath(ARBITRATION_REQUESTS_LIST_ROUTE_PATH));
  authRedirectLogged(ctx, ARBITRATION_REQUESTS_LIST_REDIRECT_ON_LOGGED_PATH);
}
