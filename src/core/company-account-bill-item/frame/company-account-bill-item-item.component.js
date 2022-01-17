import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { FileListElement } from '../../../lib/element/file-list.element';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_BILL_ITEM_DATA_NAME } from '../company-account-bill-item.constant';

export const CompanyAccountBillItemItemComponent = ({ data }) => {
  return (
    <Grid container spacing={4} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMPANY_ACCOUNT_BILL_ITEM.AMOUNT')}
        </Typography>

        <Typography variant="body1">
          {data[COMPANY_ACCOUNT_BILL_ITEM_DATA_NAME.AMOUNT]} ₽
        </Typography>
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMPANY_ACCOUNT_BILL_ITEM.NAME')}
        </Typography>

        <Typography variant="body1">
          {data[COMPANY_ACCOUNT_BILL_ITEM_DATA_NAME.NAME]}
        </Typography>
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMPANY_ACCOUNT_BILL_ITEM.INN')}
        </Typography>

        <Typography variant="body1">
          {data[COMPANY_ACCOUNT_BILL_ITEM_DATA_NAME.INN]}
        </Typography>
      </Grid>
    </Grid>
  );
};
