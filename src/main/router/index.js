import { routesInit } from './router.core';
import { AuthChangePasswordRouter } from '../../core/auth-change-password';
import { AuthRecoveryAccountRouter } from '../../core/auth-recovery-account';
import { LoginRouter } from '../../core/login';
import { SignupRouter } from '../../core/signup';

import { LOGIN_ROUTE_PATH } from '../../core/login';
import { SIGNUP_ROUTE_PATH } from '../../core/signup';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../../core/auth-recovery-account';
import { AUTH_CHANGE_PASSWORD_ROUTE_PATH } from '../../core/auth-change-password';
import {
  AUTH_VERIFICATION_EMAIL_CONFIRM_ROUTE_PATH,
  AuthVerificationEmailConfirmRouter,
} from '../../core/auth-verification-email-confirm';

export const routes = {
  [LOGIN_ROUTE_PATH]: LoginRouter,
  [SIGNUP_ROUTE_PATH]: SignupRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: AuthRecoveryAccountRouter,
  [AUTH_CHANGE_PASSWORD_ROUTE_PATH]: AuthChangePasswordRouter,
  [AUTH_VERIFICATION_EMAIL_CONFIRM_ROUTE_PATH]:
    AuthVerificationEmailConfirmRouter,
};

export const Router = routesInit(routes);
