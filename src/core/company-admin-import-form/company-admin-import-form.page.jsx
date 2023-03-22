import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { NavigationComponent } from '../navigation/navigation.component';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';

import { COMPANY_ADMIN_IMPORT_NAVIGATION } from '../company-admin-import/company-admin-import.constant';
import { CompanyAdminImportFormContainer } from './company-admin-import-form.container';

export function CompanyAdminImportFormPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ADMIN_IMPORT_NAVIGATION} />
        </Grid>
        <Grid item>
          <Paper>
            <CompanyAdminImportFormContainer />
          </Paper>
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
