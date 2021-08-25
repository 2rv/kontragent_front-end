import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  LOGIN_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './login.constant';
export function LoginRouter(ctx) {
  ctx.store.dispatch(setActivePath(LOGIN_ROUTE_PATH));
  //   authRedirectLogged(ctx, SIGNUP_REDIRECT_ON_LOGGED_PATH);
}
