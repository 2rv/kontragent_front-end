import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { text } from '../../lib/common/text';

export function CompanyAccountItemRevisionSelfItemPaymentComponent(props) {
  const { isPending, isSuccess, isError, errorMessage, onSubmitForm, price } =
    props;
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography
          variant="title"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM_PAYMENT.TITLE',
            { price },
          )}
        />
      </Grid>

      <Grid item>
        <Typography
          variant="subTitle"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM_PAYMENT.INFO',
          )}
        />
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item>
        <Button
          onClick={onSubmitForm}
          fullWidth
          children={text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM_PAYMENT.PAY')}
        />
      </Grid>

      {isPending && (
        <Grid item>
          <LinearProgress />
        </Grid>
      )}

      {isSuccess && (
        <Grid item>
          <Alert
            severity="success"
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION.SELF.ITEM_PAYMENT.SUCCESS_PAY',
            )}
          />
        </Grid>
      )}

      {isError && (
        <Grid item>
          <Alert severity="error" children={text(`ERROR.${errorMessage}`)} />
        </Grid>
      )}
    </Grid>
  );
}
