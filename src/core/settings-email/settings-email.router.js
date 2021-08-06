import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { SIGNUP_ROUTE_PATH } from './signup.constant';
export function SignupRouter(ctx) {
  ctx.store.dispatch(setActivePath(SIGNUP_ROUTE_PATH));
}
