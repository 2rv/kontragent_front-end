import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { text } from '../../../lib/common/text';
import { COMPANY_TYPE } from '../company-admin-unregistered-list.constant';

export const CompanyAdminUnregisteredListTypeSelectComponent = ({
  label,
  ...props
}) => {
  return (
    <Grid container spacing={2}>
      {label && (
        <Grid item>
          <Typography variant="fieldLabel">{label}</Typography>
        </Grid>
      )}
      <Grid item>
        <Select {...props}>
          {Object.keys(COMPANY_TYPE).map((item, key) => (
            <MenuItem
              key={key}
              value={COMPANY_TYPE[item]}
              children={text(item)}
            />
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};
