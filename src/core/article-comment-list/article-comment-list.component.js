import React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { ArticleCommentListListComponent } from './frame/article-comment-list-list.component';
import { ArticleCommentSendContainer } from '../article-comment-send/article-comment-send.container';

export function ArticleCommentListComponent({
  data,
  pageLoading,
  isPending,
  isError,
  isSuccess,
  errorMessage,
}) {
  return (
    <Paper sx={{ p: 0 }}>
      <Box>
        <Typography
          variant="title"
          sx={{ px: 8, pt: 8, pb: 4 }}
          component="div"
        >
          {text('COMMENT.ARTICLE_COMMENT_LIST.TITLE')}
        </Typography>

        <Divider sx={{ mx: 8 }} />

        {isSuccess && <ArticleCommentListListComponent list={data} />}
        {isPending && (
          <Box sx={{ pt: 4, px: 8, pb: 8 }}>
            <SkeletonListComponent />
          </Box>
        )}
        {isError && (
          <Box sx={{ pt: 4, px: 8, pb: 8 }}>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Box>
        )}

        <ArticleCommentSendContainer />
      </Box>
    </Paper>
  );
}
