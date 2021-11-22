import * as React from 'react';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { REVISION_STATUS } from '../admin-revision-review.constant';
import { text } from '../../../lib/common/text';

export const SelectElement = ({ label, storeOnChange, ...props }) => {
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
          <MenuItem sx={{ mt: -7, ml: -6, mr: -6 }} value={REVISION_STATUS.NEW}>
            {text('COMMON.REVISION.STATUS_TYPE.NEW')}
          </MenuItem>
          <MenuItem sx={{ ml: -6, mr: -6 }} value={REVISION_STATUS.PROGRESS}>
            {text('COMMON.REVISION.STATUS_TYPE.PROGRESS')}
          </MenuItem>
          <MenuItem sx={{ ml: -6, mr: -6 }} value={REVISION_STATUS.DONE}>
            {text('COMMON.REVISION.STATUS_TYPE.DONE')}
          </MenuItem>
          <MenuItem sx={{ ml: -6, mr: -6 }} value={REVISION_STATUS.PAY}>
            {text('COMMON.REVISION.STATUS_TYPE.PAY')}
          </MenuItem>
          <MenuItem
            sx={{ mb: -8, ml: -6, mr: -6 }}
            value={REVISION_STATUS.PAID}
          >
            {text('COMMON.REVISION.STATUS_TYPE.PAID')}
          </MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};
