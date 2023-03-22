import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { text } from '../../lib/common/text';
import { redirect } from '../../main/navigation/navigation.core';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../company-account-list';

export function ErrorComponent() {
  return (
    <Grid
      spacing={6}
      container
      sx={{
        margin: '50px auto',
        textAlign: 'center',
        verticalAlign: 'middle',
      }}
    >
      <Grid item>
        <img
          style={{ margin: '0 auto', display: 'block' }}
          src="/static/img/error.svg"
          height="300px"
        />
      </Grid>

      <Grid item>
        <Typography
          variant="title"
          sx={{ pb: 2, fontSize: 36 }}
          component="div"
        >
          {text('COMMON.ERROR.TITLE')}
        </Typography>
      </Grid>

      <Grid item>
        <Typography sx={{ fontSize: 18, color: '#707070' }}>
          {text('COMMON.ERROR.DESRIPTION')}
        </Typography>
      </Grid>

      <Grid item>
        <Button
          onClick={() => {
            redirect(COMPANY_ACCOUNT_LIST_ROUTE_PATH);
          }}
        >
          {' '}
          {text('COMMON.ERROR.BUTTON')}
        </Button>
      </Grid>
    </Grid>
  );
}
