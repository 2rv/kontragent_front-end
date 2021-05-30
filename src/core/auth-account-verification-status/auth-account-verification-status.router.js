import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { AUTH_ACCOUNT_VERIFICATION_STATUS_ROUTE_PATH } from './auth-account-verifiction-status.constant';
export function AuthAccountVerificationStatusRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(AUTH_ACCOUNT_VERIFICATION_STATUS_ROUTE_PATH),
  );
}
