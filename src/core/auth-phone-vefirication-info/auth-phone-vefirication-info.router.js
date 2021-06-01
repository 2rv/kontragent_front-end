import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { AUTH_PHONE_VERIFICATION_INFO_ROUTE_PATH } from './auth-phone-vefirication-info.constant';
export function AuthPhoneVerificationInfoRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_PHONE_VERIFICATION_INFO_ROUTE_PATH));
}
