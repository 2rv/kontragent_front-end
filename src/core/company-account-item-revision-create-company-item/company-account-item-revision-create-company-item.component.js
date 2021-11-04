import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import { text } from '../../lib/common/text';

import { CompanyAccountItemRevisionCreateCompanyInfoContainer } from '../company-account-item-revision-create-company-info';
import { CompanyAccountItemRevisionCreatePeriodListContainer } from '../company-account-item-revision-create-period-list/company-account-item-revision-create-period-list.container';

export function CompanyAccountItemRevisionCreateCompanyItemComponent({
  companyId,
  company,
  removeCompany,
  last,
}) {
  return (
    <Grid rowSpacing={6} container>
      <Grid item>
        <CompanyAccountItemRevisionCreateCompanyInfoContainer
          companyId={companyId}
          company={company}
        />
      </Grid>
        <Divider />
      <Grid item>
        <CompanyAccountItemRevisionCreatePeriodListContainer
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
