import Grid from '@mui/material/Grid';

import { NavigationComponent } from '../navigation/navigation.component';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';

import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';

import { CompanyAccountItemPaymentLinkContainer } from '../company-account-item-payment-link/company-account-item-payment-link.container';
import { CompanyAccountItemBalanceInfoContainer } from '../company-account-item-balance-info/company-account-item-balance-info.container';
import { CompanyAccountItemPaymentListContainer } from '../company-account-item-payment-list/company-account-item-payment-list.container';

export function CompanyAccountItemBalancePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
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
