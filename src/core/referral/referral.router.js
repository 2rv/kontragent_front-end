import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  REFERRAL_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './referral.constant';

export function referralRouter(ctx) {
  ctx.store.dispatch(setActivePath(REFERRAL_ROUTE_PATH));
}
