import { Divider, Grid, Typography } from '@mui/material';
import { text } from '../../../lib/common/text';

export function CompanyAccountItemKontragentItemInfoBasic(props) {
  const { kontragentId, kontragentName } = props;
  return (
    <Grid container>
      <Grid item>
        <Typography variant="title" sx={{ pb: 4 }} component="div">
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.KONTRAGENT_INFO')}
        </Typography>
        <Divider />
      </Grid>
      <Grid item sx={{ pt: 4 }}>
        <Typography variant="listTitle">
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.ID')}
        </Typography>
        <Typography variant="body1">{kontragentId}</Typography>
      </Grid>
      <Grid item sx={{ pt: 4 }}>
        <Typography variant="listTitle">
          {text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.KONTRAGENT_NICKNAME')}
        </Typography>
        <Typography variant="body1">{kontragentName}</Typography>
      </Grid>
    </Grid>
  );
}
