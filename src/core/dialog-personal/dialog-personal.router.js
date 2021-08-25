import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  DIALOG_PERSONAL_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './dialog-personal.constant';

export function dialogPersonalRouter(ctx) {
  ctx.store.dispatch(setActivePath(DIALOG_PERSONAL_ROUTE_PATH));
}
