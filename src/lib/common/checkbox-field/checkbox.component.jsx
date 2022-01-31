import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';

export function CheckboxField(props) {
  const { titleLabel, error, errorText, checkboxHidden, ...otherProps } = props;

  return (
    <Grid container spacing={2}>
      {titleLabel && (
        <Grid item>
          <Typography variant="fieldLabel">{titleLabel}</Typography>
        </Grid>
      )}
      <Grid item>
        <FormControlLabel
          sx={{
            minHeight: '46px',
            backgroundColor: '#F3F3F3',
            borderRadius: '10px',
            width: '100%',
            m: 0,
          }}
          control={<Checkbox hidden={checkboxHidden} />}
          inputProps={{ 'aria-label': 'controlled' }}
          {...otherProps}
        />
      </Grid>
      {error && (
        <Grid item>
          <Typography variant="errorText">{errorText}</Typography>
        </Grid>
      )}
    </Grid>
  );
}
