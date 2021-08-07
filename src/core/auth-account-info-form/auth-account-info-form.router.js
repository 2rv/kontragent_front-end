import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { AUTH_ACCOUNT_INFO_FORM_ROUTE_PATH } from './auth-account-info-form.constant';

export function LoginRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_ACCOUNT_INFO_FORM_ROUTE_PATH));
}
