import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { CreateArticleContainer } from './article-create.container';

export function CreateArticlePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <CreateArticleContainer />
      </Grid>
    </NavigationComponent>
  );
}
