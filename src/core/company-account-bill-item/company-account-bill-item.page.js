import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';
import { CompanyAccountBillItemContainer } from './company-account-bill-item.container';

export function CompanyAccountBillItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <Typography variant="heading" component="div">
            {text('COMPANY_ACCOUNT_BILL_ITEM.TITLE')}
          </Typography>
        </Grid>
        <Grid item>
          <CompanyAccountBillItemContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
