import { routesInit } from './router.core';

import { IndexRouter } from '../../core/index/index.router';

export const routes = {
  '/': IndexRouter,
};

export const Router = routesInit(routes);
