import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { text } from '../../lib/common/text';

import { CompanyAccountItemRevisionCreateCompanyListListComponent } from './frame/company-account-item-revision-create-company-list-list.component';

export function CompanyAccountItemRevisionCreateCompanyListComponent({
  companies,
  addCompany,
}) {
  return (
    <Grid rowSpacing={4} container>
      <Grid item>
        <Typography variant="heading" component="div">
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_LIST.TITLE',
          )}
        </Typography>
      </Grid>
      <Grid item>
        <CompanyAccountItemRevisionCreateCompanyListListComponent
          companies={companies}
        />
      </Grid>
      <Grid item>
        <Button variant="black" onClick={addCompany} fullWidth>
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_LIST.BUTTON',
          )}
        </Button>
      </Grid>
    </Grid>
  );
}
