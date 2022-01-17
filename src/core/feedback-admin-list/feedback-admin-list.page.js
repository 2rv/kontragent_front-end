import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { FeedbackAdminListContainer } from './feedback-admin-list.container';

export function FeedbackAdminListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <FeedbackAdminListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
