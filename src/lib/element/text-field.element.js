import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';

export const TextFieldElement = ({
  errorText,
  error,
  label,
  storeOnChange,
  inputProps,
  ...props
}) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    props.onChange(e);
    storeOnChange && dispatch(storeOnChange(e.target.value));
  };

  return (
    <Grid container spacing={2}>
      {label && (
        <Grid item>
          <Typography variant="fieldLabel">{label}</Typography>
        </Grid>
      )}
      <Grid item>
        <TextField
          inputProps={{
            ...inputProps,
            style: { padding: props.multiline || '13px 14px' },
          }}
          {...props}
          error={error}
          onChange={(e) => handleChange(e)}
        />
      </Grid>
      {error && (
        <Grid item>
          <Typography variant="errorText">{errorText}</Typography>
        </Grid>
      )}
    </Grid>
  );
};
