import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { KontragentImportContainer } from './kontragent-import.container';

export function KontragentImportPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <KontragentImportContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
