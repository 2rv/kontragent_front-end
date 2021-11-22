import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { ArticleViewContainer } from './article-view.container';

export function ArticlePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <ArticleViewContainer />
      </Grid>
    </NavigationComponent>
  );
}
