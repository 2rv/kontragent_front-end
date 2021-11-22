import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation';
import { ADMIN_POST_LIST_DATA_NAME } from '../admin-post-list.constant';

export const AdminPostListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">{text('ADMIN_POST_LIST.EMPTY')}</Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 6, pb: 8 }} disablePadding>
      {list.map((items, key) => (
        <React.Fragment key={key}>
          <ListItem
            button
            key={key}
            /* onClick={() => {
              return redirect(ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH_DYNAMIC, {
                dynamic: true,
                params: {
                  postId: items[REVISION_ADMIN_LIST_DATA_NAME.ID],
                },
              });
            }}*/
            sx={{ py: 3, px: 3 }}
          >
            <ListItemText
              primary={
                <span>
                  {`
                     ${text('COMMON.REVISION.TITLE')}
                     ${items[ADMIN_POST_LIST_DATA_NAME.TITLE]} 
                    ${text('COMMON.REVISION.CREATE_DATE')}
                        ${items[ADMIN_POST_LIST_DATA_NAME.CREATE_DATE]}
                    `}
                </span>
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
