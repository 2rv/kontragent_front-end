import * as React from 'react';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { text } from '../../lib/common/text/';
import { ROLE_TYPE } from '../../core/user-admin-role/user-admin-role.constant';

export const AdminSelectElement = ({ label, storeOnChange, ...props }) => {
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
        <Select {...props} onChange={(e) => handleChange(e)}>
          <MenuItem sx={{ mt: -7, ml: -6, mr: -6 }} value={ROLE_TYPE.USER}>
            {text('USER_ADMIN_ROLE.SELECT.USER')}
          </MenuItem>
          <MenuItem sx={{ mb: -8, ml: -6, mr: -6 }} value={ROLE_TYPE.ADMIN}>
            {text('USER_ADMIN_ROLE.SELECT.ADMIN')}
          </MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};
