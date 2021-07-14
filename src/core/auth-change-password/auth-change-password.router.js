import {
  AUTH_CHANGE_PASSWORD_REDIRECT_NO_CODE_PATH,
  AUTH_CHANGE_PASSWORD_ROUTE_PATH,
} from './auth-change-password.constant';

import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { codeVerificationRedirectNoCode } from '../../lib/common/code-verification';

export function AuthChangePasswordRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_CHANGE_PASSWORD_ROUTE_PATH));

  //   codeVerificationRedirectNoCode(
  //     ctx,
  //     AUTH_CHANGE_PASSWORD_REDIRECT_NO_CODE_PATH,
  //   );
}
