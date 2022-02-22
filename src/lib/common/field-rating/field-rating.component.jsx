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

      <Grid item sx={{ minHeight: 46 }}>
        <Rating
          sx={{
            backgroundColor: '#F3F3F3',
            width: '100%',
            minHeight: 46,
            alignItems: 'center',
            pl: 2,
            borderColor: '#E5E8EC',
            borderRadius: '10px',
          }}
          error={error}
          {...fieldProps}
        />
      </Grid>

      {error && errorText && (
        <Grid item>
          <Typography variant="errorText" children={errorText} />
        </Grid>
      )}
    </Grid>
  );
}
