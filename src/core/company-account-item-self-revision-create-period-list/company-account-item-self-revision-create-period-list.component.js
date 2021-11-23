import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { text } from '../../lib/common/text';

import { CompanyAccountItemSelfRevisionCreatePeriodListListComponent } from './frame/company-account-item-self-revision-create-period-list-list.component';

export function CompanyAccountItemSelfRevisionCreatePeriodListComponent({
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
        <CompanyAccountItemSelfRevisionCreatePeriodListListComponent
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
