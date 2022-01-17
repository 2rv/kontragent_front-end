import { Grid } from '@mui/material';
import { CompanyAccountItemRevisionCreateCompanyListContainer } from '../company-account-item-revision-create-company-list/company-account-item-revision-create-company-list.container';

import { CompanyAccountItemRevisionCreatePriceContainer } from '../company-account-item-revision-create-price/company-account-item-revision-create-price.container';

export function CompanyAccountItemRevisionCreateComponent(props) {
  const { state } = props;

  return (
    <Grid rowSpacing={10} container>
      <Grid item>
        <CompanyAccountItemRevisionCreateCompanyListContainer
          companies={state.company}
        />
      </Grid>
      <Grid item>
        <CompanyAccountItemRevisionCreatePriceContainer state={state} />
      </Grid>
    </Grid>
  );
}
