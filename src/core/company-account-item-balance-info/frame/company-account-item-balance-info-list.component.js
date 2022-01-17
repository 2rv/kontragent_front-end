import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_BALANCE_INFO_DATA_NAME } from '../company-account-item-balance-info.constant';

export const CompanyAccountItemBalanceInfoListComponent = ({ data }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMPANY_ACCOUNT_ITEM_BALANCE.BALANCE_INFO.COMPANY_BALANCE')}
        </Typography>
        <Typography variant="listContent">
          {data[COMPANY_ACCOUNT_ITEM_BALANCE_INFO_DATA_NAME.AMOUNT]}{' '}
          {text('CURRENCY.RUB')}
        </Typography>
      </Grid>
    </Grid>
  );
};
