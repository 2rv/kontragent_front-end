import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import { AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_ROUTE_PATH } from './auth-recovery-account-update-password.constant';
export function AuthRecoveryAccountUpdatePasswordRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_ROUTE_PATH),
  );
  authRedirectLogged(ctx, '/');
}
