import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const TextFieldElement = ({ errorText, error, label, ...props }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="fieldLabel">{label}</Typography>
      </Grid>
      <Grid item>
        <TextField error={error} {...props} />
      </Grid>
      {error && (
        <Grid item>
          <Typography variant="errorText">{errorText}</Typography>
        </Grid>
      )}
    </Grid>
  );
};
