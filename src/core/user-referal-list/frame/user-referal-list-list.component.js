import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { text } from '../../../lib/common/text';
import { USER_REFERAL_LIST_DATA_NAME } from '../user-referal-list.constant';

export const UserReferalListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ px: 8, pb: 8 }}>
        <Alert severity="info">
          {text('USER_REFERAL.USER_REFERAL_LIST.EMPTY')}
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
                <span>{`${items[USER_REFERAL_LIST_DATA_NAME.FIRSTNAME]}
                    ${items[USER_REFERAL_LIST_DATA_NAME.LASTNAME]}
                    `}</span>
              }
              secondary={
                <span>{`${text('USER_REFERAL.USER_REFERAL_LIST.CREATE_DATE')}
                    ${items[USER_REFERAL_LIST_DATA_NAME.CREATE_DATE]}
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
