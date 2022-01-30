import * as React from 'react';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME } from '../company-account-item-revision-create-period-item.constant';

import { useDispatch } from 'react-redux';

export const YearSelect = (props) => {
  const yearsArr = [
    1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
    2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  ];

  const {
    handleBlur,
    values,
    handleChange,
    companyAccountItemRevisionCreateChangeYear,
  } = props;
  const dispatch = useDispatch();
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="fieldLabel">
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_LIST.YEAR',
          )}
        </Typography>
      </Grid>
      <Grid item>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={
            values[
              COMPANY_ACCOUNT_ITEM_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME.YEAR
            ]
          }
          name={
            COMPANY_ACCOUNT_ITEM_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME.YEAR
          }
          onChange={(e) => {
            handleChange(e);
            dispatch(
              companyAccountItemRevisionCreateChangeYear(e.target.value),
            );
          }}
          onBlur={handleBlur}
        >
          {yearsArr.map((year) => {
            return <MenuItem value={year}>{year}</MenuItem>;
          })}
        </Select>
      </Grid>
    </Grid>
  );
};
