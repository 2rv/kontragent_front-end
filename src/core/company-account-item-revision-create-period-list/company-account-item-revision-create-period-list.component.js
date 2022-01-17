import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { text } from '../../lib/common/text';

import { CompanyAccountItemRevisionCreatePeriodListListComponent } from './frame/company-account-item-revision-create-period-list-list.component';

export function CompanyAccountItemRevisionCreatePeriodListComponent({
  periods,
  companyId,
  addPeriod,
}) {
  return (
    <Grid rowSpacing={4} container>
      <Grid item>
        <Typography variant="subtitle1" component="div">
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_LIST.TITLE',
          )}
        </Typography>
      </Grid>
      <Grid item>
        <CompanyAccountItemRevisionCreatePeriodListListComponent
          periods={periods}
          companyId={companyId}
        />
      </Grid>
      <Grid item>
        <Button variant="grey" color="black" onClick={addPeriod} fullWidth>
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_LIST.BUTTON',
          )}
        </Button>
      </Grid>
    </Grid>
  );
}
