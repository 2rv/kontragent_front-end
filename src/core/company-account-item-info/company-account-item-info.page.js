import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';
import { CompanyAccountItemInfoContainer } from './company-account-item-info.container';

export function CompanyAccountItemInfoPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer TAB_LIST={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAccountItemInfoContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
