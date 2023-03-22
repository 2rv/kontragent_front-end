import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import { text } from '../../lib/common/text';
import { CheckboxField } from '../../lib/common/checkbox-field/checkbox.component';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME as FIELD_NAME } from '../company-account-item-revision-kontragent-create/company-account-item-revision-kontragent-create.constant';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_PRICE_DATA_NAME as DATA_NAME } from './company-account-item-revision-kontragent-create-price.constant';
import { convertRevisionPrice } from '../../lib/common/revision-period-price/revision-price';

export function CompanyAccountItemRevisionKontragentCreatePriceComponent(
  props,
) {
  const { totalPrice, handleChange, handleBlur, value, data } = props;

  const {
    amountCompanyBalance,
    resultCompanyBalance,
    amountReferalBalance,
    resultReferalBalance,
    isExistComBal,
    isNoNExistComBal,
  } = convertRevisionPrice({
    price: totalPrice || 0,
    companyBalance: data[DATA_NAME.COMPANY_BALANCE],
    referalBalance: data[DATA_NAME.REFERAL_BALANCE],
    isUseReferalBalance: value,
  });

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
            price: value ? totalPrice - amountReferalBalance : totalPrice,
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

      {!isExistComBal && (
        <Grid item xs={12}>
          <Alert
            severity="error"
            children={text('Недостаточный баланс - нехватает ещё {{price}}', {
              price: isNoNExistComBal,
            })}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="listTitle" children={text('Баланс компании ')} />
        <Typography
          variant="listContent"
          children={text(`${resultCompanyBalance}$t(COMMON.CURRENCY.RUB) `)}
        />
        <Typography
          variant="listContent"
          sx={{ textDecoration: 'line-through', color: '#707070' }}
          children={text(
            `${data[DATA_NAME.COMPANY_BALANCE] || 0}$t(COMMON.CURRENCY.RUB)`,
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="listTitle"
          children={text('Реферальный баланс ')}
        />
        <Typography
          variant="listContent"
          children={text('{{price}}$t(COMMON.CURRENCY.RUB) ', {
            price: value
              ? resultReferalBalance
              : data[DATA_NAME.REFERAL_BALANCE],
          })}
        />
        {value && (
          <Typography
            variant="listContent"
            sx={{ textDecoration: 'line-through', color: '#707070' }}
            children={text('{{price}}$t(COMMON.CURRENCY.RUB)', {
              price: data[DATA_NAME.REFERAL_BALANCE],
            })}
          />
        )}
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12} lg={6}>
        <Button
          type="submit"
          disabled={!isExistComBal || !totalPrice}
          fullWidth
          children={text(
            '$t(COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISION_CREATE_COMPANY_PRICE.BUTTON) {{price}}$t(COMMON.CURRENCY.RUB)',
            { price: amountCompanyBalance },
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
