import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FieldTextComponent } from '../../../lib/common/field-text/field-text.component';
import { FieldRatingComponent } from '../../../lib/common/field-rating/field-rating.component';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_FIELD_NAME as FIELD_NAME } from '../company-account-item-kontragent-item-update-data.constant';

export function CompanyAccountItemKontragentItemUpdateDataFormComponent(props) {
  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,
    isValid,

    pageLoading,
    isPending,
    isSuccess,
    isError,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) => isFieldError(name) && errors[name];

  const isSubmitDisabled = () => {
    if (isError) {
      return false;
    }

    if (isPending) {
      return true;
    }

    if (JSON.stringify(touched) === '{}') {
      return true;
    }

    if (!isValid || isSuccess || pageLoading) {
      return true;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} direction="row" justifyContent="flex-start">
        <Grid item xs={12} md={6}>
          <FieldTextComponent
            fullWidth
            type="email"
            label={'Почта'}
            onChange={handleChange}
            onBlur={handleBlur}
            name={FIELD_NAME.EMAIL}
            value={values[FIELD_NAME.EMAIL]}
            error={isFieldError(FIELD_NAME.EMAIL)}
            errorText={getFieldError(FIELD_NAME.EMAIL)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FieldRatingComponent
            fullWidth
            type="number"
            label={'Рейтинг'}
            onChange={handleChange}
            onBlur={handleBlur}
            name={FIELD_NAME.RATING}
            value={values[FIELD_NAME.RATING]}
            error={isFieldError(FIELD_NAME.RATING)}
            errorText={getFieldError(FIELD_NAME.RATING)}
          />
        </Grid>

        <Grid item xs={12}>
          <FieldTextComponent
            fullWidth
            multiline
            type="text"
            label={'Описание'}
            onChange={handleChange}
            onBlur={handleBlur}
            name={FIELD_NAME.COMMENT}
            value={values[FIELD_NAME.COMMENT]}
            error={isFieldError(FIELD_NAME.COMMENT)}
            errorText={getFieldError(FIELD_NAME.COMMENT)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Button
            fullWidth
            type="sumbit"
            disabled={isSubmitDisabled()}
            children="Подтвердить"
          />
        </Grid>
      </Grid>
    </form>
  );
}
