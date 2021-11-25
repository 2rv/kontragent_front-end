import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { text } from '../../../lib/common/text';
import { ARTICLE_COMMENT_LIST_DATA_NAME } from '../article-comment-list.constant';

export const ArticleCommentListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ py: 4, px: 8 }}>
        <Alert severity="info">
          {text('COMMENT.ARTICLE_COMMENT_LIST.EMPTY')}
        </Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 8, pb: 8 }} disablePadding>
      {list.map((item, key) => (
        <React.Fragment key={key}>
          <ListItem sx={{ py: 3, px: 3 }}>
            <ListItemText
              primary={
                <span>{`${item[ARTICLE_COMMENT_LIST_DATA_NAME.TEXT]} ${
                  item[ARTICLE_COMMENT_LIST_DATA_NAME.CREATE_DATE]
                } `}</span>
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
