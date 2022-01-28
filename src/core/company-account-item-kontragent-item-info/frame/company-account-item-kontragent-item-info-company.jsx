import { Button, Divider, Grid, Typography } from '@mui/material';
import { text } from '../../../lib/common/text';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME } from '../company-account-item-kontragent-item-info.constant';

export function CompanyAccountItemKontragentItemInfoCompany(props) {
  const { data, removeKontragent, isRemovePending } = props;
  return (
    <Grid container>
      <Grid item>
        <Typography variant="title" sx={{ pb: 4 }} component="div">
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.COMPANY_INFO')}
        </Typography>

        <Divider />
      </Grid>

      <Grid item sx={{ pt: 4 }}>
        <Typography variant="listTitle">
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.ID')}
        </Typography>
        <Typography variant="body1">
          {data[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.COMPANY_ID]}
        </Typography>
      </Grid>

      {data[
        COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.COMPANY_NAME
      ] && (
        <Grid item sx={{ pt: 4 }}>
          <Typography variant="listTitle">
            {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.COMPANY_NAME')}
          </Typography>
          <Typography variant="body1">
            {
              data[
                COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.COMPANY_NAME
              ]
            }
          </Typography>
        </Grid>
      )}

      <Grid item sx={{ pt: 4 }}>
        <Typography variant="listTitle">
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.INN')}
        </Typography>
        <Typography variant="body1">
          {data[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.INN]}
        </Typography>
      </Grid>

      <Grid item sx={{ pt: 4 }}>
        <Typography variant="listTitle">
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.REGISTERED.TITLE')}
        </Typography>
        <Typography variant="body1">
          {data[
            COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME
              .COMPANY_REGISTERED
          ]
            ? text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.REGISTERED.YES')
            : text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.REGISTERED.NO')}
        </Typography>
      </Grid>

      <Grid item sx={{ pt: 4 }}>
        <Button fullWidth onClick={removeKontragent} disabled={isRemovePending}>
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.REMOVE_KONTRAGENT')}
        </Button>
      </Grid>
    </Grid>
  );
}
