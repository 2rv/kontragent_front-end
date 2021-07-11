import { routesInit } from './router.core';
import { AuthChangePasswordRouter } from '../../core/auth-change-password';
import { AuthRecoveryAccountRouter } from '../../core/auth-recovery-account';
import { LoginRouter } from '../../core/login';
import { SignupRouter } from '../../core/signup';
import { DialogsRouter } from '../../core/dialogs';

import { LOGIN_ROUTE_PATH } from '../../core/login';
import { SIGNUP_ROUTE_PATH } from '../../core/signup';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../../core/auth-recovery-account';
import { AUTH_CHANGE_PASSWORD_ROUTE_PATH } from '../../core/auth-change-password';
import { DIALOGS_ROUTE_PATH } from '../../core/dialogs';

export const routes = {
  [LOGIN_ROUTE_PATH]: LoginRouter,
  [SIGNUP_ROUTE_PATH]: SignupRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: AuthRecoveryAccountRouter,
  [AUTH_CHANGE_PASSWORD_ROUTE_PATH]: AuthChangePasswordRouter,
  [DIALOGS_ROUTE_PATH]: DialogsRouter,
};

export const Router = routesInit(routes);
