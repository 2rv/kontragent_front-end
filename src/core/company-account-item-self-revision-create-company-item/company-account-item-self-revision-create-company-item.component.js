import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import { text } from '../../lib/common/text';

import { CompanyAccountItemSelfRevisionCreateCompanyInfoContainer } from '../company-account-item-self-revision-create-company-info/company-account-item-self-revision-create-company-info.container';
import { CompanyAccountItemSelfRevisionCreatePeriodListContainer } from '../company-account-item-self-revision-create-period-list/company-account-item-self-revision-create-period-list.container';

export function CompanyAccountItemSelfRevisionCreateCompanyItemComponent({
  companyId,
  company,
  removeCompany,
  last,
}) {
  return (
    <Grid rowSpacing={6} container>
      <Grid item>
        <CompanyAccountItemSelfRevisionCreateCompanyInfoContainer
          companyId={companyId}
          company={company}
        />
      </Grid>
      <Divider />
      <Grid item>
        <CompanyAccountItemSelfRevisionCreatePeriodListContainer
          companyId={companyId}
          company={company}
        />
      </Grid>
      {!last && (
        <Grid item>
          <Button color="error" variant="red" onClick={removeCompany} fullWidth>
            {text(
              'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_ITEM.BUTTON',
            )}
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
