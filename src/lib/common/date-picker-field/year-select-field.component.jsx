import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const YearSelectFieldComponent = ({
  errorText,
  error,
  label,
  value,
  fromYear = new Date().getFullYear(),
  toYear = new Date().getFullYear(),
  ...props
}) => {
  const range = (start, stop) =>
    Array.from({ length: (stop - start) / 1 + 1 }, (_, i) => start + i * 1);

  const yearsArr = range(fromYear, toYear);

  return (
    <Grid container spacing={2}>
      {label && (
        <Grid item>
          <Typography variant="fieldLabel">{label}</Typography>
        </Grid>
      )}
      <Grid item>
        <Select {...props}>
          {yearsArr.map((year) => (
            <MenuItem value={year} children={year} />
          ))}
        </Select>
      </Grid>
      {error && (
        <Grid item>
          <Typography variant="errorText">{errorText}</Typography>
        </Grid>
      )}
    </Grid>
  );
};
