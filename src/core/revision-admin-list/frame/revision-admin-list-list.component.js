import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { text } from '../../../lib/common/text';
import { REVISION_ADMIN_LIST_DATA_NAME } from '../revision-admin-list.constant';
import { ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH_DYNAMIC } from '../../admin-revision-review-item';

import { redirect } from '../../../main/navigation';

export const RevisionAdminListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">{text('REVISION_ADMIN_LIST.EMPTY')}</Alert>
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
            onClick={() => {
              return redirect(ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH_DYNAMIC, {
                dynamic: true,
                params: {
                  revisionId: items[REVISION_ADMIN_LIST_DATA_NAME.ID],
                },
              });
            }}
            sx={{ py: 3, px: 3 }}
          >
            <ListItemText
              primary={
                <span>
                  {`
                    ${text('COMMON.REVISION.ID')}
                        ${items[REVISION_ADMIN_LIST_DATA_NAME.ID]}
                    ${text('COMMON.REVISION.TITLE')}
                        ${items[REVISION_ADMIN_LIST_DATA_NAME.TITLE]}
                    `}
                </span>
              }
              secondary={
                <span>
                  {`
                    ${text('COMMON.REVISION.STATUS')}
                        ${items[REVISION_ADMIN_LIST_DATA_NAME.STATUS]}
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
