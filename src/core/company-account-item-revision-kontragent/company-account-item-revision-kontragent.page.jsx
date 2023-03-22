import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';

import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';

import { CompanyAccountItemRevisionKontragentComponent } from './company-account-item-revision-kontragent.component';
import { CompanyAccountItemRevisionKontragentListContainer } from '../company-account-item-revision-kontragent-list/company-account-item-revision-kontragent-list.container';

export function CompanyAccountItemRevisionKontragentPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAccountItemRevisionKontragentComponent />
        </Grid>
        <Grid item>
          <CompanyAccountItemRevisionKontragentListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
