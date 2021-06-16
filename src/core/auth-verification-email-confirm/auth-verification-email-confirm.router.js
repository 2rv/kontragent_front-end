import {
  AUTH_VERIFICATION_EMAIL_CONFIRM_NO_CODE_PATH,
  AUTH_VERIFICATION_EMAIL_CONFIRM_ROUTE_PATH,
} from './auth-verification-email-confirm.constant';

import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { codeVerificationRedirectNoCode } from '../../lib/common/code-verification';

export function AuthVerificationEmailConfirmRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_VERIFICATION_EMAIL_CONFIRM_ROUTE_PATH));

  codeVerificationRedirectNoCode(
    ctx,
    AUTH_VERIFICATION_EMAIL_CONFIRM_NO_CODE_PATH,
  );
}
