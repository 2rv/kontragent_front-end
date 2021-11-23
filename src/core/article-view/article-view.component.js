import { Article } from './frames/article.component';
import { ARTICLE_DATA_NAME } from './article-view.constant';
import Skeleton from '@mui/material/Skeleton';
import Link from '@mui/material/Link';
import { redirect } from '../../main/navigation/navigation.core';
import { Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC } from '../user-admin-item-info/user-admin-item-info.constant';

export function ArticleViewComponent(props) {
  const {
    loadDataPending,
    loadDataSuccess,
    article,
    isadmin,
    iscreator,
    articleId
  } = props;

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
                  redirect(USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC, {
                    dynamic: true,
                    params: {
                      userId: article[ARTICLE_DATA_NAME.ID],
                    },
                  });
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
              articleId={articleId}
              isadmin={isadmin}
              iscreator={iscreator}
              acticleData={article[ARTICLE_DATA_NAME.ARTICLE]}
            />
          )}
          {loadDataPending && (
            <Grid>
              <Box sx={{ pt: 4, px: 2, pb: 2 }}>
                <Skeleton variant="rectangular" sx={{ height: '120px' }} />
              </Box>
              <Box sx={{ pt: 4, px: 2, pb: 2 }}>
                <Skeleton variant="rectangular" sx={{ height: '120px' }} />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Paper>
  );
}
