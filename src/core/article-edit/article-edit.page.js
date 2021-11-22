import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { EditArticleContainer } from './article-edit.container';

export function EditArticlePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <EditArticleContainer />
      </Grid>
    </NavigationComponent>
  );
}
