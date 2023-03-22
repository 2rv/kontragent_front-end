import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { CompanyAccountItemMemberAddContainer } from '../company-account-item-member-add/company-account-item-member-add.container';
import { CompanyAccountItemMemberListContainer } from '../company-account-item-member-list/company-account-item-member-list.container';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { COMPANY_ACCOUNT_ITEM_NAVIGATION } from '../company-account-item/company-account-item.constant';

export function CompanyAccountItemMemberPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ACCOUNT_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAccountItemMemberAddContainer />
        </Grid>
        <Grid item>
          <CompanyAccountItemMemberListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
