import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation';
import { FEEDBACK_ADMIN_LIST_DATA_NAME } from '../feedback-admin-list.constant';
import {
  FEEDBACK_ADMIN_ITEM_DATA_NAME,
  FEEDBACK_ADMIN_ITEM_DYNAMIC_ROUTE_PATH,
} from '../../feedback-admin-item';

export const FeedbackAdminListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ px: 8, pb: 8 }}>
        <Alert severity="info">{text('ADMIN_POST_LIST.EMPTY')}</Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 8, pb: 8 }} disablePadding>
      {list.map((items, key) => (
        <React.Fragment key={key}>
          <ListItem
            button
            key={key}
            onClick={() => {
              return redirect(FEEDBACK_ADMIN_ITEM_DYNAMIC_ROUTE_PATH, {
                dynamic: true,
                params: {
                  feedbackId: items[FEEDBACK_ADMIN_ITEM_DATA_NAME.ID],
                },
              });
            }}
            sx={{ py: 3, px: 3 }}
          >
            <ListItemText
              primary={
                <>
                  <Typography variant="listTitle">
                    {items[FEEDBACK_ADMIN_LIST_DATA_NAME.TITLE]}
                  </Typography>
                </>
              }
              secondary={
                <>
                  <Typography variant="listTitle">
                    {items[FEEDBACK_ADMIN_LIST_DATA_NAME.CREATE_DATE]}
                  </Typography>
                </>
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
