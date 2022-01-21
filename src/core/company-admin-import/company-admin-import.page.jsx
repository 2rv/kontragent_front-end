import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { CompanyAdminImportContainer } from './company-admin-import.container';

export function CompanyAdminImportPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <CompanyAdminImportContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
