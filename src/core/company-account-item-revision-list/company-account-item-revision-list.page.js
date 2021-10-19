import { NavigationComponent } from '../navigation/navigation.component';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { CompanyAccountItemRevisionCreateInfo } from './frame/company-account-item-revision-create-info.component';
import { CompanyAccountItemRevisionListContainer } from './company-account-item-revision-list.container';

export function CompanyAccountItemRevisionListPage() {
  return (
    <Grid spacing={6} container>
      <Grid item>
        <CompanyAccountItemRevisionCreateInfo />
      </Grid>
      <Grid item>
        <CompanyAccountItemRevisionListContainer />
      </Grid>
    </Grid>
  );
}
