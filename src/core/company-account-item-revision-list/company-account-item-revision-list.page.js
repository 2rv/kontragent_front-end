import { NavigationComponent } from '../navigation/navigation.component';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { CompanyAccountRevisionCreateInfo } from './frame/company-account-revision-create-info.component';
import { CompanyAccountItemRevisionListContainer } from './company-account-item-revision-list.container';

export function CompanyAccountItemRevisionListPage() {
  return (
    <Grid spacing={6} container>
      <Grid item>
        <CompanyAccountRevisionCreateInfo />
      </Grid>
      <Grid item>
        <CompanyAccountItemRevisionListContainer />
      </Grid>
    </Grid>
  );
}
