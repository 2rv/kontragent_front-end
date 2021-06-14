import { routesInit } from './router.core';
import { AuthChangePasswordRouter } from '../../core/auth-change-password';
import { AuthRecoveryAccountRouter } from '../../core/auth-recovery-account';
import { LoginRouter } from '../../core/login';
import { SignupRouter } from '../../core/signup';

export const routes = {
  '/login': LoginRouter,
  '/signup': SignupRouter,
  '/auth-recovery-account': AuthRecoveryAccountRouter,
  '/auth-change-password': AuthChangePasswordRouter,
};

export const Router = routesInit(routes);
