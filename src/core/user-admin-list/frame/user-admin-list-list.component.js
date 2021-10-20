import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { text } from '../../../lib/common/text';
import { USER_ADMIN_LIST_DATA_NAME } from '../user-admin-list.constant';

export const UserAdminListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">{text('USER_ADMIN_LIST.USER_LIST.EMPTY')}</Alert>
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
                <span>{`${text('COMMON.USER.ID')}${
                  items[USER_ADMIN_LIST_DATA_NAME.ID]
                }
           ${text('COMMON.USER.LOGIN')} ${
                  items[USER_ADMIN_LIST_DATA_NAME.LOGIN]
                }
           ${text('COMMON.USER.FISRT_NAME')} ${
                  items[USER_ADMIN_LIST_DATA_NAME.FIRSTNAME]
                }
        ${text('COMMON.USER.LAST_NAME')} ${
                  items[USER_ADMIN_LIST_DATA_NAME.LASTNAME]
                }

           `}</span>
              }
              secondary={
                <span>{`${text('COMMON.USER.EMAIL')}
                ${items[USER_ADMIN_LIST_DATA_NAME.EMAIL]}
                ${text('COMMON.USER.PHONE')} ${
                  items[USER_ADMIN_LIST_DATA_NAME.PHONE]
                } 
                ${text('COMMON.USER.ROLE')} ${
                  items[USER_ADMIN_LIST_DATA_NAME.ROLE] === 1
                    ? text('COMMON.USER.USER_ROLE.USER')
                    : text('COMMON.USER.USER_ROLE.ADMIN')
                }

                ${
                  (text('COMMON.USER.CONFIRM_EMAIL'),
                  items[USER_ADMIN_LIST_DATA_NAME.CONFIRM_EMAIL]
                    ? text('COMMON.USER.VERIFIED')
                    : text('COMMIN.USER.NOT_VERIFIED'))
                }

                ${text('COMMON.USER.CONFIRM_PHONE')} ${
                  items[USER_ADMIN_LIST_DATA_NAME.CONFIRM_PHONE]
                    ? text('COMMON.USER.VERIFIED')
                    : text('COMMIN.USER.NOT_VERIFIED')
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
