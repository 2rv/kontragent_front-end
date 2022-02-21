import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { text } from '../text';

export function FieldRatingComponent(props) {
  const { label, errorText, error, placeholder, ...fieldProps } = props;

  return (
    <Grid container spacing={2}>
      {label && (
        <Grid item>
          <Typography variant="fieldLabel" children={text(label)} />
        </Grid>
      )}

      <Grid item>
        <Rating error={error} {...fieldProps} />
      </Grid>

      {error && errorText && (
        <Grid item>
          <Typography variant="errorText" children={errorText} />
        </Grid>
      )}
    </Grid>
  );
}
