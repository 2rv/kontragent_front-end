import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';

export function CompanyAccountItemRevisionKontragentCreatePriceComponent(
  props,
) {
  const { totalPrice } = props;
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={16} sm={8}>
        <Typography
          variant="h4"
          component="div"
          children={`${totalPrice} ${text('COMMON.CURRENCY.RUB')}`}
        />
        <Typography
          sx={{ color: '#B5B5B5' }}
          variant="subtitle2"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISION_CREATE_COMPANY_PRICE.PS',
          )}
        />
      </Grid>
      <Grid item xs={8} sm={4}>
        <Button
          type="submit"
          disabled={!totalPrice}
          fullWidth
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISION_CREATE_COMPANY_PRICE.BUTTON',
          )}
        />
      </Grid>
    </Grid>
  );
}
