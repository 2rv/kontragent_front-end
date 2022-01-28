import { Grid, Typography, Paper } from '@mui/material';
import { text } from '../../lib/common/text';
import { NavigationComponent } from '../navigation/navigation.component';
import { AdminDashboardFeedbackListContainer } from '../admin-dashboard-feedback-list';

export function AdminDashboardPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <Typography variant="heading" children={text('Панель админа')} />
        </Grid>

        <Grid item>
          <Paper>
            <AdminDashboardFeedbackListContainer />
          </Paper>
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
