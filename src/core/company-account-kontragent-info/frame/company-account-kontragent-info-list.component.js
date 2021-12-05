import { Button, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_NAME } from '../company-account-kontragent-info.constant';

export const CompanyAccountKontragentItemInfoListComponent = ({ data, removeKontragent }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography
          variant="title"
          sx={{ pb: 4 }}
          component="div"
        >
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.KONTRAGENT_INFO')}
        </Typography>

        <Divider />
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.COMPANY.ID')}
        </Typography>
        <Typography variant="listContent">
          {data[COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_NAME.ID]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.COMPANY.COMPANY_NAME')}
        </Typography>
        <Typography variant="listContent">
          {data[COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_NAME.KONTRAGENT_NAME]}
        </Typography>
      </Grid>
      <Grid item>
        <Divider />

        <Typography
          variant="title"
          sx={{ pb: 4, pt: 4 }}
          component="div"
        >
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.COMPANY_INFO')}
        </Typography>

        <Divider />
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.COMPANY.COMPANY_NAME')}
        </Typography>
        <Typography variant="listContent">
          {data[COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_NAME.COMPANY_NAME]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.COMPANY.INN')}
        </Typography>
        <Typography variant="listContent">
          {data[COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_NAME.INN]}
        </Typography>
      </Grid>
      <Grid item>
        <Button fullWidth onClick={removeKontragent}>
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.REMOVE_KONTRAGENT')}
        </Button>
      </Grid>
    </Grid>
  );
};
