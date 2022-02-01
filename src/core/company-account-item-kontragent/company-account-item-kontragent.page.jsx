import { createContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { NavigationComponent } from '../navigation/navigation.component';

import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';
import { CompanyAccountItemKontragentCreateContainer } from '../company-account-item-kontragent-create/company-account-item-kontragent-create.container';
import { CompanyAccountItemKontragentListContainer } from '../company-account-item-kontragent-list/company-account-item-kontragent-list.container';
import { CompanyAccountItemKontragentImportContainer } from '../company-account-item-kontragent-import/company-account-item-kontragent-import.container';
export const CompanyAccountItemKontragentContext = createContext();

const CompanyAccountItemKontragentProvider = ({ children }) => {
  const [data, setData] = useState({ reloadList: false });

  const value = { value: data, setValue: setData };

  return (
    <CompanyAccountItemKontragentContext.Provider value={value}>
      {children}
    </CompanyAccountItemKontragentContext.Provider>
  );
};

export function CompanyAccountItemKontragentPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <CompanyAccountItemKontragentProvider>
          <Grid item>
            <CompanyAccountItemKontragentCreateContainer />
          </Grid>
          <Grid item>
            <CompanyAccountItemKontragentListContainer />
          </Grid>
          <Grid item>
            <CompanyAccountItemKontragentImportContainer />
          </Grid>
        </CompanyAccountItemKontragentProvider>
      </Grid>
    </NavigationComponent>
  );
}
