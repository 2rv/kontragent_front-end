import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { CompanyBillListContainer } from './company-bill-list.container';
import { text } from '../../lib/common/text';
import Typography from '@mui/material/Typography';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';

export function CompanyBillListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyBillListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
