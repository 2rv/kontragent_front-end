import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  DIALOG_LAWYER_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './dialog-lawyer.constant';

export function dialogLawyerRouter(ctx) {
  ctx.store.dispatch(setActivePath(DIALOG_LAWYER_ROUTE_PATH));
}
