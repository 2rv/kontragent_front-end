import { routesInit } from './router.core';
import { LoginRouter } from '../../core/login';
import { SignupRouter } from '../../core/signup';
import { AuthRecoveryAccountRouter } from '../../core/auth-recovery-account';

export const routes = {
  '/login': LoginRouter,
  '/signup': SignupRouter,
  '/auth-recovery-account': AuthRecoveryAccountRouter,
};

export const Router = routesInit(routes);
