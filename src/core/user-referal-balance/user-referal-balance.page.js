import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { USER_REFERAL_NAVIGATION } from '../user-referal/user-referal.constant';
import { UserReferalInfoContainer } from '../user-referal-info/user-referal-info.container';
import { UserReferalPaymentListContainer } from '../user-referal-payment-list/user-referal-payment-list.container';

export function UserReferalBalancePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={USER_REFERAL_NAVIGATION} />
        </Grid>
        <Grid item>
          <UserReferalInfoContainer />
        </Grid>
        <Grid item>
          <UserReferalPaymentListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
