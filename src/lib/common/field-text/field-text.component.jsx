import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { text } from '../text';

export function FieldTextComponent(props) {
  const { label, errorText, error, placeholder, ...fieldProps } = props;
  return (
    <Grid container spacing={2}>
      {label && (
        <Grid item>
          <Typography variant="fieldLabel" children={text(label)} />
        </Grid>
      )}

      <Grid item sx={{ minHeight: 46 }}>
        <TextField
          placeholder={placeholder ? text(placeholder) : ''}
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
