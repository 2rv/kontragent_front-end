import { Article } from './frames/article.component';
import { ARTICLE_DATA_NAME } from './article-view.constant';

import Link from '@mui/material/Link';
import { redirect } from '../../main/navigation/navigation.core';
import { USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC } from '../user-admin-item-info';

import { Grid } from '@material-ui/core';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export function ArticleViewComponent(props) {
  const { loadDataPending, loadDataSuccess, article, isadmin, articleId } =
    props;

  return (
    <Paper>
      <Box>
        {loadDataSuccess && (
          <Box>
            <Typography>
              {'Заголовок: ' + article[ARTICLE_DATA_NAME.TITLE]}
            </Typography>
            <Typography>
              {'Описание: ' + article[ARTICLE_DATA_NAME.DESCRIPTION]}
            </Typography>
            <Typography>
              {'Дата создания: ' + article[ARTICLE_DATA_NAME.CREATE_DATE]}
            </Typography>
            {isadmin && (
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  redirect(
                    USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC(
                      article[ARTICLE_DATA_NAME.ID],
                    ),
                  );
                }}
              >
                {`${article[ARTICLE_DATA_NAME.FIRSTNAME]} ${
                  article[ARTICLE_DATA_NAME.LASTNAME]
                }`}
              </Link>
            )}
          </Box>
        )}
        <Grid>
          {loadDataSuccess && (
            <Article
              isadmin={isadmin}
              articleId={articleId}
              acticleData={article[ARTICLE_DATA_NAME.ARTICLE]}
            />
          )}
          {loadDataPending && (
            <Box sx={{ pt: 4, width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
        </Grid>
      </Box>
    </Paper>
  );
}
