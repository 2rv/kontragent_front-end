import Grid from '@mui/material/Grid';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { NavigationComponent } from '../navigation/navigation.component';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_NAVIGATION } from '../company-account-item-kontragent-item/company-account-item-kontragent-item.constant';
import { CompanyAccountItemKontragentItemRevisionListContainer } from './company-account-item-kontragent-item-revision-list.container';

export function CompanyAccountItemKontragentItemRevisionListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer
            config={COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_NAVIGATION}
          />
        </Grid>
        <Grid item>
          <CompanyAccountItemKontragentItemRevisionListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
