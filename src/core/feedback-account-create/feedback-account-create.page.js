import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { FeedbackAccountCreateContainer } from './feedback-account-create.container';

export function FeedbackAccountCreatePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <FeedbackAccountCreateContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
