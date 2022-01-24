import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import { Grid, Paper } from '@mui/material';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { COMPANY_ADMIN_ITEM_NAVIGATION } from '../company-admin-item/company-admin-item.constant';
import { CompanyAdminItemInfoListContainer } from '../company-admin-item-info-list/company-admin-item-info-list.container';
import { CompanyAccountItemInfoVerificateContainer } from '../company-admin-item-info-verificate';
import { CompanyAccountInfoDataContainer } from '../company-account-info-data';

export function CompanyAdminItemInfoPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ADMIN_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAdminItemInfoListContainer />
        </Grid>
        <Grid item>
          <CompanyAccountItemInfoVerificateContainer />
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
