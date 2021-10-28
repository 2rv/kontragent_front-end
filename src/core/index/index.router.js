import {
  authRedirectLogged,
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';

import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../../core/auth-verification-email';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../../core/auth-verification-phone';

export function IndexRouter(ctx) {
  authRedirectPrivated(ctx, '/auth/signup');

  authRedirectVerification(
    ctx,
    AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
    AUTH_VERIFICATION_PHONE_ROUTE_PATH,
  );
  // authRedirectNotAdmin(ctx, Черезе конст)
  authRedirectLogged(ctx, '/company');
}
