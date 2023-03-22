import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { text } from '../text';

export function SelectFieldComponent(props) {
  const { label, labelProps, error, errorText, options, ...selectProps } =
    props;

  return (
    <Grid container spacing={2}>
      {label && (
        <Grid item>
          <Typography variant="fieldLabel" children={text(label, labelProps)} />
        </Grid>
      )}

      <Grid item>
        <Select error={error} {...selectProps}>
          {options.map((option, key) => (
            <MenuItem
              key={(option.key, key)}
              value={option.value}
              children={text(option.text, option.textProps)}
            />
          ))}
        </Select>
      </Grid>

      {error && (
        <Grid item>
          <Typography variant="errorText" children={text(errorText)} />
        </Grid>
      )}
    </Grid>
  );
}
