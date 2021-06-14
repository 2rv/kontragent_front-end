import { routesInit } from './router.core';
import { AuthChangePasswordRouter } from '../../core/auth-change-password';
import { LoginRouter } from '../../core/login';
import { SignupRouter } from '../../core/signup';

export const routes = {
  '/auth-change-password': AuthChangePasswordRouter,
  '/login': LoginRouter,
  '/signup': SignupRouter,
};

export const Router = routesInit(routes);
