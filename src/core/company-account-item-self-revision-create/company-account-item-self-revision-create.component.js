import { Grid } from '@mui/material';
import { CompanyAccountItemSelfRevisionCreateCompanyListContainer } from '../company-account-item-self-revision-create-company-list/company-account-item-self-revision-create-company-list.container';

import { CompanyAccountItemSelfRevisionCreatePriceContainer } from '../company-account-item-self-revision-create-price/company-account-item-self-revision-create-price.container';

export function CompanyAccountItemSelfRevisionCreateComponent(props) {
  const { state } = props;

  return (
    <Grid rowSpacing={10} container>
      <Grid item>
        <CompanyAccountItemSelfRevisionCreateCompanyListContainer
          companies={state.company}
        />
      </Grid>
      <Grid item>
        <CompanyAccountItemSelfRevisionCreatePriceContainer state={state} />
      </Grid>
    </Grid>
  );
}
