import {
  authRedirectLogged,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';

export function IndexRouter(ctx) {
  authRedirectPrivated(ctx, '/auth/signup');

  authRedirectVerification(
    ctx,
    '/auth/verification/email',
    '/auth/verification/phone',
  );

  authRedirectLogged(ctx, '/company');
}
