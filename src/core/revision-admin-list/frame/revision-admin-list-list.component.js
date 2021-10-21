import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { text } from '../../../lib/common/text';
import { REVISION_ADMIN_LIST_DATA_NAME } from '../revision-admin-list.constant';

export const RevisionAdminListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">
          {text('REVISION_ADMIN_LIST.REVISION_LIST.EMPTY')}
        </Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 6, pb: 8 }} disablePadding>
      {list.map((items, key) => (
        <React.Fragment>
          <ListItem key={key} sx={{ py: 3, px: 3 }}>
            <ListItemText
              primary={
                <span>
                  {`
                    ${text(REVISION_ADMIN_LIST_DATA_NAME.ID)}:
                        ${items[REVISION_ADMIN_LIST_DATA_NAME.ID]}
                    ${text(REVISION_ADMIN_LIST_DATA_NAME.TITLE)}:
                        ${items[REVISION_ADMIN_LIST_DATA_NAME.TITLE]}
                    `}
                </span>
              }
              secondary={
                <span>
                  {`
                    ${text(REVISION_ADMIN_LIST_DATA_NAME.STATUS)}:
                        ${items[REVISION_ADMIN_LIST_DATA_NAME.STATUS]}
                    ${text(REVISION_ADMIN_LIST_DATA_NAME.PRICE)}: 
                        ${items[REVISION_ADMIN_LIST_DATA_NAME.PRICE]} 
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
