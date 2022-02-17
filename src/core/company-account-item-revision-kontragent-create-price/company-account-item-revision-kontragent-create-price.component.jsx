import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import { text } from '../../lib/common/text';
import { CheckboxField } from '../../lib/common/checkbox-field/checkbox.component';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME as FIELD_NAME } from '../company-account-item-revision-kontragent-create/company-account-item-revision-kontragent-create.constant';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_PRICE_DATA_NAME as DATA_NAME } from './company-account-item-revision-kontragent-create-price.constant';

export function CompanyAccountItemRevisionKontragentCreatePriceComponent(
  props,
) {
  const { totalPrice, handleChange, handleBlur, value, data } = props;

  const isInsufficientBalance = () => {
    if (value) {
      const totalBalance =
        data[DATA_NAME.COMPANY_BALANCE] + data[DATA_NAME.REFERAL_BALANCE];
      return totalBalance - totalPrice < 0;
    } else {
      return data[DATA_NAME.COMPANY_BALANCE] - totalPrice < 0;
    }
  };

  const resultPrice = value
    ? totalPrice - data[DATA_NAME.REFERAL_BALANCE]
    : totalPrice;

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justifyContent="flex-start"
      alignItems="baseline"
    >
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISION_CREATE_COMPANY_PRICE.TITLE',
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs="auto">
        <Typography
          variant="heading"
          component="span"
          children={text('{{price}}$t(COMMON.CURRENCY.RUB)', {
            price: resultPrice,
          })}
        />
      </Grid>

      {value && (
        <Grid item xs>
          <Typography
            variant="title"
            sx={{ textDecoration: 'line-through', color: '#707070' }}
            children={text('{{totalPrice}}$t(COMMON.CURRENCY.RUB)', {
              totalPrice: totalPrice,
            })}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <Typography
          sx={{ color: '#B5B5B5' }}
          variant="subtitle2"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISION_CREATE_COMPANY_PRICE.PS',
          )}
        />
      </Grid>

      {isInsufficientBalance() && (
        <Grid item xs={12}>
          <Alert severity="error" children={'Недостаточный баланс'} />
        </Grid>
      )}

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs="auto">
        <Typography variant="listTitle" children={text('Баланс компании ')} />
        <Typography
          variant="listContent"
          children={text(
            `${data[DATA_NAME.COMPANY_BALANCE]}$t(COMMON.CURRENCY.RUB)`,
          )}
        />
      </Grid>

      <Grid item xs="auto">
        <Typography
          variant="listTitle"
          children={text('Реферальный баланс ')}
        />
        <Typography
          variant="listContent"
          children={text(
            `${data[DATA_NAME.REFERAL_BALANCE]}$t(COMMON.CURRENCY.RUB)`,
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12} lg={6}>
        <Button
          type="submit"
          disabled={isInsufficientBalance()}
          fullWidth
          children={text(
            '$t(COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISION_CREATE_COMPANY_PRICE.BUTTON) {{price}}$t(COMMON.CURRENCY.RUB)',
            { price: resultPrice },
          )}
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <CheckboxField
          onChange={handleChange}
          onBlur={handleBlur}
          checked={value}
          disabled={!data[DATA_NAME.REFERAL_BALANCE]}
          label={text('Использовать реферальный баланс ')}
          name={FIELD_NAME.USE_REF_BALANCE}
        />
      </Grid>
    </Grid>
  );
}
