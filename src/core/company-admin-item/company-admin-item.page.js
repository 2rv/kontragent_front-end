import React from 'react';

import { NavigationComponent } from '../navigation/navigation.component';

import Grid from '@mui/material/Grid';

import { CompanyAccountItemTabComponent } from './frame/company-admin-item-tab';

import { CompanyAdminItemInfoPage } from '../company-admin-item-info/company-admin-item-info.page';
import { CompanyAccountItemBalancePage } from '../company-account-item-balance/company-account-item-balance.page';
import { CompanyAdminItemMemberListContainer } from '../company-admin-item-member-list/company-admin-item-member-list.container';
import { CompanyAdminItemRevisionListContainer } from '../company-admin-item-revision-list/company-admin-item-revision-list.container';
import { CompanyAdminBillListContainer } from '../company-admin-bill-list/company-admin-bill-list.container';

const TAB = [
  {
    id: 0,
    label: 'NAVIGATION.TABS.COMPANY_ADMIN_ITEM.REVISION',
    component: CompanyAdminItemRevisionListContainer,
  },
  {
    id: 1,
    label: 'NAVIGATION.TABS.COMPANY_ADMIN_ITEM.INFO',
    component: CompanyAdminItemInfoPage,
  },
  {
    id: 2,
    label: 'NAVIGATION.TABS.COMPANY_ADMIN_ITEM.MEMBERS',
    component: CompanyAdminItemMemberListContainer,
  },
  {
    id: 3,
    label: 'NAVIGATION.TABS.COMPANY_ADMIN_ITEM.BILL_LIST',
    component: CompanyAdminBillListContainer,
  },
];

export function CompanyAdminItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <CompanyAccountItemTabComponent tab={TAB} />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
