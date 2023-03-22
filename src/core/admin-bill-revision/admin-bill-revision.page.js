import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { AdminBillInfoContainer } from '../admin-bill-info/admin-bill-info.container';
import { AdminBillRevisionContainer } from './admin-bill-revision.container';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function AdminBillRevisionPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <Typography variant="heading" component="div">
            {text('ADMIN_BILL_REVISION.TITLE')}
          </Typography>
        </Grid>
        <Grid item>
          <AdminBillInfoContainer />
        </Grid>
        <Grid item>
          <AdminBillRevisionContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
