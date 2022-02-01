import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';

import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';
import { CompanyAccountItemRevisionSelfComponent } from './company-account-item-revision-self.component';
import { CompanyAccountItemRevisionSelfListContainer } from '../company-account-item-revision-self-list/company-account-item-revision-self-list.container';

export function CompanyAccountItemRevisionSelfPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAccountItemRevisionSelfComponent />
        </Grid>
        <Grid item>
          <CompanyAccountItemRevisionSelfListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
