import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import { Grid, Paper } from '@mui/material';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';
import { CompanyAccountItemInfoContainer } from './company-account-item-info.container';
import { CompanyAccountInfoDataContainer } from '../company-account-info-data';

export function CompanyAccountItemInfoPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAccountItemInfoContainer />
        </Grid>
        <Grid item>
          <Paper>
            <CompanyAccountInfoDataContainer />
          </Paper>
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
