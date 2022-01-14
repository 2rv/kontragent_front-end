import Grid from '@mui/material/Grid';
import { CompanyAdminItemInfoListContainer } from '../company-admin-item-info-list/company-admin-item-info-list.container';
import { CompanyAccountItemInfoVerificateContainer } from '../company-admin-item-info-verificate';
import { CompanyAdminItemInfoDataContainer } from '../company-admin-item-info-data';

export function CompanyAdminItemInfoPage() {
  return (
    <Grid spacing={3} container>
      <Grid item>
        <CompanyAccountItemInfoVerificateContainer />
      </Grid>
      <Grid item>
        <CompanyAdminItemInfoListContainer />
      </Grid>
      <Grid item>
        <CompanyAdminItemInfoDataContainer />
      </Grid>
    </Grid>
  );
}
