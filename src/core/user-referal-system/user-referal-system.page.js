import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { USER_REFERAL_NAVIGATION } from '../user-referal/user-referal.constant';
import { UserReferalCreateContainer } from '../user-referal-create/user-referal-create.container';
import { UserReferalListContainer } from '../user-referal-list/user-referal-list.container';

export function UserReferalSystemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer TAB_LIST={USER_REFERAL_NAVIGATION} />
        </Grid>
        <Grid item>
          <UserReferalCreateContainer />
        </Grid>
        <Grid item>
          <UserReferalListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
