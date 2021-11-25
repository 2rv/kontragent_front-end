import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { ArticleViewContainer } from './article-view.container';
import { ArticleCommentListContainer } from '../article-comment-list/article-comment-list.container';

export function ArticlePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <ArticleViewContainer />
        </Grid>
        <Grid item>
          <ArticleCommentListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
