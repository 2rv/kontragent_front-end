import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';

import { CompanyAccountItemRevisionCreateInfo } from './frame/company-account-item-revision-create-info.component';
import { CompanyAccountItemRevisionListContainer } from './company-account-item-revision-list.container';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';

export function CompanyAccountItemRevisionListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAccountItemRevisionCreateInfo />
        </Grid>
        <Grid item>
          <CompanyAccountItemRevisionListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
