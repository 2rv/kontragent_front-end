import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';

import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';
import { CompanyAccountItemRevisionListContainer } from '../company-account-item-revision-list/company-account-item-revision-list.container';
import {
  CompanyAccountItemRevisionCreateLink,
  CompanyAccountItemRevisionSelfCreateLink,
} from './company-account-item-revision.component';

export function CompanyAccountItemRevisionPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAccountItemRevisionCreateLink />
        </Grid>
        <Grid item>
          <CompanyAccountItemRevisionSelfCreateLink />
        </Grid>
        <Grid item>
          <CompanyAccountItemRevisionListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
