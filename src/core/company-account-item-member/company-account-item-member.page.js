import Grid from '@mui/material/Grid';

import { CompanyAccountItemMemberAddContainer } from '../company-account-item-member-add/company-account-item-member-add.container';
import { CompanyAccountItemMemberListContainer } from '../company-account-item-member-list/company-account-item-member-list.container';

export function CompanyAccountItemMemberPage() {
  return (
    <Grid spacing={3} container>
      <Grid item>
        <CompanyAccountItemMemberAddContainer />
      </Grid>
      <Grid item>
        <CompanyAccountItemMemberListContainer />
      </Grid>
    </Grid>
  );
}
