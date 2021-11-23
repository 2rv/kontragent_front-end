import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { text } from '../../lib/common/text';

import { CompanyAccountItemSelfRevisionCreateCompanyListListComponent } from './frame/company-account-item-self-revision-create-company-list-list.component';

export function CompanyAccountItemSelfRevisionCreateCompanyListComponent({
  companies,
  addCompany,
}) {
  return (
    <Grid rowSpacing={4} container>
      <Grid item>
        <Typography variant="heading" component="div">
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_LIST.TITLE1',
          )}
        </Typography>
      </Grid>
      <Grid item>
        <CompanyAccountItemSelfRevisionCreateCompanyListListComponent
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
