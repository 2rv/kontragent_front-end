import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { FileListElement } from '../../../lib/element/file-list.element';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_BILL_ITEM_DATA_NAME } from '../company-account-bill-item.constant';

export const CompanyAccountBillItemInfoComponent = ({ data }) => {
  return (
    <Grid container spacing={4} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography variant="body1">
          {data[COMPANY_ACCOUNT_BILL_ITEM_DATA_NAME.DESCRIPTION]}
        </Typography>
      </Grid>

      <Grid item>
        {data[COMPANY_ACCOUNT_BILL_ITEM_DATA_NAME.FILES] &&
        data[COMPANY_ACCOUNT_BILL_ITEM_DATA_NAME.FILES].length > 0 ? (
          <FileListElement
            list={data[COMPANY_ACCOUNT_BILL_ITEM_DATA_NAME.FILES]}
          />
        ) : (
          <Typography variant="body1">
            {text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.NO_FILES_PROVIDED',
            )}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
