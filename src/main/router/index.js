import { routesInit } from './router.core';
import { SettingsRouter } from '../../core/settings/settings.router';
import { IndexRouter } from '../../core/index/index.router';
import { CompanyAccountListRouter } from '../../core/company-account-list/company-account-list.router';
import { CompanyAccountItemRouter } from '../../core/company-account-item/company-account-item.router';

export const routes = {
  '/': IndexRouter,
  '/settings': SettingsRouter,
  '/company': CompanyAccountListRouter,
  '/company/[comapanyId]': CompanyAccountItemRouter,
};

export const Router = routesInit(routes);
