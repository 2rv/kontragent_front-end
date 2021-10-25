import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { getQuery } from '../../main/navigation/navigation.core';

import { COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision-list';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../company-account-list';

import { CompanyAccountItemTabComponent } from '../../lib/common/navigation-tab/navigation-tab.component';

export function CompanyAccountItemContainer() {
  const [tab, settab] = React.useState(null);
  React.useEffect(() => {
    settab([
      {
        id: 0,
        label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.REVISION',
        path: COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC(
          getQuery('companyId'),
        ),
      },
      {
        id: 1,
        label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.BALANCE',
        path: COMPANY_ACCOUNT_LIST_ROUTE_PATH,
      },
    ]);
  }, []);

  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <CompanyAccountItemTabComponent tab={tab} />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
