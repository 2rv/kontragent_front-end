import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  AUTH_RECOVERY_ACCOUNT_ROUTE_PATH,
  AUTH_RECOVERY_ACCOUNT_REDIRECT_ON_LOGGED_PATH,
} from './auth-recovery-account.constant';
export function AuthRecoveryAccountRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_RECOVERY_ACCOUNT_ROUTE_PATH));
  authRedirectLogged(ctx, AUTH_RECOVERY_ACCOUNT_REDIRECT_ON_LOGGED_PATH);
}
