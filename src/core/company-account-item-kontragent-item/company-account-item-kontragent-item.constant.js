import { getQuery } from '../../main/navigation/navigation.core';
import {
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVISION_LIST_ROUTE_PATH,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC,
} from '../company-account-item-kontragent-item-revision-list/company-account-item-kontragent-item-revision-list.constant';

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_ROUTE_PATH =
  '/company/[companyId]/kontragent/[kontragentId]';

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_ROUTE_PATH_DYNAMIC = (
  { companyId, kontragentId } = {
    companyId: '[companyId]',
    kontragentId: '[kontragentId]',
  },
) => `/company/${companyId}/kontragent/${kontragentId}`;

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_NAVIGATION = [
  {
    id: 0,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.KONTRAGENT_ITEM.DATA',

    path: () => {
      return COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
        kontragentId: getQuery('kontragentId'),
      });
    },
    pathname: COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_ROUTE_PATH,
  },
  {
    id: 1,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.KONTRAGENT_ITEM.REVIEW_LIST',
    path: () => {
      return COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC(
        {
          companyId: getQuery('companyId'),
          kontragentId: getQuery('kontragentId'),
        },
      );
    },
    pathname: COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVISION_LIST_ROUTE_PATH,
  },
];
