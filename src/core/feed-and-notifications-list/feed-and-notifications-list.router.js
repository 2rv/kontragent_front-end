import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  FEED_AND_NOTIFICATIONS_LIST_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './feed-and-notifications-list.constant';

export function feedAndNotificationsListRouter(ctx) {
  ctx.store.dispatch(setActivePath(FEED_AND_NOTIFICATIONS_LIST_ROUTE_PATH));
  authRedirectPrivated(ctx, SIGNUP_REDIRECT_ON_LOGGED_PATH);
}
