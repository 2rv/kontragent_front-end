import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { UserReferalPaymentListListComponent } from './frame/user-referal-payment-list-view';

export function UserReferalPaymentComponent(props) {
  const { isPending, isSuccess, data, isError, errorMessage } = props;
  return (
    <Paper>
      <Grid container spacing={6}>
        <Grid item>
          <Typography
            variant="heading"
            children={text('USER_REFERAL.USER_REFERAL_PAYMENT_LIST.TITLE')}
          />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        {isSuccess && (
          <Grid item>
            <UserReferalPaymentListListComponent list={data} />
          </Grid>
        )}

        {isPending && (
          <Grid item>
            <SkeletonListComponent />
          </Grid>
        )}

        {isError && (
          <Grid item>
            <Alert severity="error" children={text(`ERROR.${errorMessage}`)} />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
