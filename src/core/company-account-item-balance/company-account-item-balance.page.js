import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';

import { CompanyAccountItemPaymentLinkContainer } from '../company-account-item-payment-link/company-account-item-payment-link.container';
import { CompanyAccountItemBalanceInfoContainer } from '../company-account-item-balance-info/company-account-item-balance-info.container';
import { CompanyAccountItemPaymentListContainer } from '../company-account-item-payment-list/company-account-item-payment-list.container';

export function CompanyAccountItemBalancePage() {
  return (
    <Grid spacing={3} container>
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
  );
}
