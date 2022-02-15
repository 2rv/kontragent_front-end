import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { text } from '../../lib/common/text';

export function CompanyAccountItemKontragentItemDeleteComponent(props) {
  const { isPending, isError, isSuccess, errorMessage, onRemove } = props;

  return (
    <Grid container spacing={6}>
      <Grid item sx={{ pt: 4 }}>
        <Button
          fullWidth
          onClick={onRemove}
          disabled={isPending || isSuccess}
          children={text('COMPANY_ACCOUNT_KONTRAGENTS.INFO.REMOVE_KONTRAGENT')}
        />
      </Grid>

      {isSuccess && (
        <Grid item>
          <Alert severity="success" children={text('Успешно')} />
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
