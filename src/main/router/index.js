import { homeRouter, HOME_ROUTE_PATH } from '../../core/home';
import { routesInit } from './router.core';

export const routes = {
  [HOME_ROUTE_PATH]: homeRouter,
};

export const Router = routesInit(routes);
