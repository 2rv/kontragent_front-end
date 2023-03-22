import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { NavigationComponent } from '../navigation/navigation.component';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';

import { COMPANY_ADMIN_IMPORT_NAVIGATION } from './company-admin-import.constant';
import { CompanyAdminImportContainer } from './company-admin-import.container';

export function CompanyAdminImportPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ADMIN_IMPORT_NAVIGATION} />
        </Grid>
        <Grid item>
          <Paper>
            <CompanyAdminImportContainer />
          </Paper>
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
