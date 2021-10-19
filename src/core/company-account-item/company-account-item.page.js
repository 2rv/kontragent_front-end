import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';

import { CompanyAccountItemTabComponent } from './frame/company-account-item-tab';

import { CompanyAccountItemInfoContainer } from '../company-account-item-info/company-account-item-info.container';
import { CompanyAccountItemBalancePage } from '../company-account-item-balance/company-account-item-balance.page';
import { CompanyAccountItemMemberPage } from '../company-account-item-member/company-account-item-member.page';
import { CompanyAccountItemRevisionListPage } from '../company-account-item-revision-list/company-account-item-revision-list.page';

const TAB = [
  {
    id: 0,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.REVISION',
    component: CompanyAccountItemRevisionListPage,
  },
  {
    id: 1,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.BALANCE',
    component: CompanyAccountItemBalancePage,
  },
  {
    id: 2,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.INFO',
    component: CompanyAccountItemInfoContainer,
  },
  {
    id: 3,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.MEMBERS',
    component: CompanyAccountItemMemberPage,
  },
];

export function CompanyAccountItemPage() {
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
