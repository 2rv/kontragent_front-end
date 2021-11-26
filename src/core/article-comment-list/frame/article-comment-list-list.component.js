import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { text } from '../../../lib/common/text';
import { ARTICLE_COMMENT_LIST_DATA_NAME } from '../article-comment-list.constant';
import { ArticleCommentDeleteContainer } from '../../article-comment-delete/article-comment-delete.container';
import { USER_ROLE } from '../../../lib/common/auth';

export const ArticleCommentListListComponent = ({ list, role }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ py: 4 }}>
        <Alert severity="info">
          {text('COMMENT.ARTICLE_COMMENT_LIST.EMPTY')}
        </Alert>
      </Box>
    );
  }

  return (
    <List disablePadding>
      {list.map((item, key) => (
        <React.Fragment key={key}>
          <ListItem
            secondaryAction={
              role === USER_ROLE.USER ? null : (
                <ArticleCommentDeleteContainer
                  commentId={item[ARTICLE_COMMENT_LIST_DATA_NAME.ID]}
                />
              )
            }
          >
            <ListItemText
              primary={
                <span>{`
                ${item[ARTICLE_COMMENT_LIST_DATA_NAME.FIRST_NAME]}
                ${item[ARTICLE_COMMENT_LIST_DATA_NAME.LAST_NAME]}: 
                ${item[ARTICLE_COMMENT_LIST_DATA_NAME.TEXT]} ${
                  item[ARTICLE_COMMENT_LIST_DATA_NAME.CREATE_DATE]
                }
                
                `}</span>
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
