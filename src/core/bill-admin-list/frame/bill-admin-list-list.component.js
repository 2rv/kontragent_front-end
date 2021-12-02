import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { redirect } from '../../../main/navigation';
import { text } from '../../../lib/common/text';
import { BILL_ADMIN_LIST_DATA_NAME } from '../bill-admin-list.constant';

export const BillAccountListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">{text('BILL_ADMIN_LIST.BILL_LIST.EMPTY')}</Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 8, pb: 8 }} disablePadding>
      {list.map((item, key) => (
        <React.Fragment key={key}>
          <ListItem key={key} button sx={{ py: 3, px: 3 }}>
            <ListItemText
              primary={
                <span>{`${text('BILL_ADMIN_LIST.BILL_LIST.ID')} ${
                  item[BILL_ADMIN_LIST_DATA_NAME.ID]
                }, ${text('BILL_ADMIN_LIST.BILL_LIST.NAME')} ${
                  item[BILL_ADMIN_LIST_DATA_NAME.NAME]
                }`}</span>
              }
              secondary={`${text('BILL_ADMIN_LIST.BILL_LIST.CREATE_DATE')} ${
                item[BILL_ADMIN_LIST_DATA_NAME.CREATE_DATE]
              }`}
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
