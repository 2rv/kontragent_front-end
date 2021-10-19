import Grid from '@mui/material/Grid';

import { CompanyAdminItemInfoListContainer } from '../company-admin-item-info-list/company-admin-item-info-list.container';
import { CompanyAccountItemInfoVerificateContainer } from '../company-admin-item-info-verificate';

export function CompanyAdminItemInfoPage() {
  return (
    <Grid spacing={3} container>
      <Grid item>
        <CompanyAccountItemInfoVerificateContainer />
      </Grid>
      <Grid item>
        <CompanyAdminItemInfoListContainer />
      </Grid>
    </Grid>
  );
}
