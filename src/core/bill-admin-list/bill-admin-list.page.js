import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { BillAdminListContainer } from './bill-admin-list.container';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function BillAdminListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <Typography variant="heading" component="div">
            {text('BILL_ADMIN_LIST.TITLE')}
          </Typography>
        </Grid>
        <Grid item>
          <BillAdminListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
