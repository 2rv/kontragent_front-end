import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { NavigationComponent } from '../navigation/navigation.component';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_NAVIGATION } from './company-account-item-kontragent-item.constant';
import { CompanyAccountItemKontragentItemInfoContainer } from '../company-account-item-kontragent-item-info/company-account-item-kontragent-item-info.container';
import { CompanyAccountItemKontragentItemKonturContainer } from '../company-account-item-kontragent-item-kontur/company-account-item-kontragent-item-kontur.container';
import { CompanyAccountItemKontragentItemDeleteContainer } from '../company-account-item-kontragent-item-delete/company-account-item-kontragent-item-delete.container';
import { CompanyAccountItemKontragentItemUpdateDataLinkComponent } from '../company-account-item-kontragent-item-update-data-link/company-account-item-kontragent-item-update-data-link.component';

export function CompanyAccountItemKontragentItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer
            config={COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_NAVIGATION}
          />
        </Grid>

        <Grid item>
          <Paper>
            <CompanyAccountItemKontragentItemUpdateDataLinkComponent />
          </Paper>
        </Grid>

        <Grid item>
          <Paper>
            <CompanyAccountItemKontragentItemInfoContainer />
          </Paper>
        </Grid>

        <Grid item>
          <Paper>
            <CompanyAccountItemKontragentItemKonturContainer />
          </Paper>
        </Grid>

        <Grid item>
          <Paper>
            <CompanyAccountItemKontragentItemDeleteContainer />
          </Paper>
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
