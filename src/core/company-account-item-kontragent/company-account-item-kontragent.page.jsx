import Grid from '@mui/material/Grid';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { NavigationComponent } from '../navigation/navigation.component';

import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';
import { CompanyAccountItemKontragentContainer } from './company-account-item-kontragent.container';
import { CompanyAccountItemKontragentImportContainer } from '../company-account-item-kontragent-import';

export function CompanyAccountItemKontragentPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAccountItemKontragentContainer />
        </Grid>
        <Grid item>
          <CompanyAccountItemKontragentImportContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
