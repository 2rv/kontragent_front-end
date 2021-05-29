import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  SIGNUP_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './signup.constant';
export function SignupRouter(ctx) {
  ctx.store.dispatch(setActivePath(SIGNUP_ROUTE_PATH));
  // authRedirectLogged(ctx, SIGNUP_REDIRECT_ON_LOGGED_PATH);
}
