import { NavigationComponent } from '../navigation/navigation.component';

import Grid from '@mui/material/Grid';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';
import { CompanyAccountItemCreateBillContainer } from './company-account-item-create-bill.container';

export function CompanyAccountItemCreateBillPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAccountItemCreateBillContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
