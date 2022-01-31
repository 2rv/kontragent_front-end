import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const FieldDatePickerComponent = ({
  errorText,
  error,
  label,
  name,
  setValue,
  ...props
}) => {
  const handleChange = (value) => {
    setValue(name, value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2}>
        {label && (
          <Grid item>
            <Typography variant="fieldLabel">{label}</Typography>
          </Grid>
        )}
        <Grid item>
          <DatePicker
            sx={{ p: 0 }}
            error={error}
            renderInput={(params) => (
              <TextField {...params} sx={{ p: 0, color: 'black' }} />
            )}
            onChange={handleChange}
            allowSameDateSelection
            type="number"
            {...props}
          />
        </Grid>
        {error && (
          <Grid item>
            <Typography variant="errorText">{errorText}</Typography>
          </Grid>
        )}
      </Grid>
    </LocalizationProvider>
  );
};
