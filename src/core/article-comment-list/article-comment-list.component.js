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
  isPending,
  isError,
  isSuccess,
  errorMessage,
  role,
}) {
  return (
    <div>
      <Typography sx={{ mb: 3 }} variant="title" component="div">
        {text('COMMENT.ARTICLE_COMMENT_LIST.TITLE')}
      </Typography>

      <Divider />

      {isSuccess && <ArticleCommentListListComponent list={data} role={role} />}
      {isPending && (
        <Box sx={{ pt: 4, px: 8, pb: 8 }}>
          <SkeletonListComponent />
        </Box>
      )}
      {isError && (
        <Box sx={{ pt: 4, pb: 8 }}>
          <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
        </Box>
      )}

      <ArticleCommentSendContainer />
    </div>
  );
}
