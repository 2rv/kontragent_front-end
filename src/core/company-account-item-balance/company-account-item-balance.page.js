import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';

import { CompanyAccountItemPaymentLinkContainer } from '../company-account-item-payment-link/company-account-item-payment-link.container';
import { CompanyAccountItemBalanceInfoContainer } from '../company-account-item-balance-info/company-account-item-balance-info.container';
import { CompanyAccountItemPaymentListContainer } from '../company-account-item-payment-list/company-account-item-payment-list.container';

import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';

export function CompanyAccountItemBalancePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer TAB_LIST={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAccountItemBalanceInfoContainer />
        </Grid>
        <Grid item>
          <CompanyAccountItemPaymentLinkContainer />
        </Grid>
        <Grid item>
          <CompanyAccountItemPaymentListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
