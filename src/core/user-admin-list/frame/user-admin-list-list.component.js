import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { text } from '../../../lib/common/text';
import { USER_ADMIN_LIST_DATA_NAME } from '../user-admin-list.constant';
import Typography from '@mui/material/Typography';
import { redirect } from '../../../main/navigation';
import { USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC } from '../../user-admin-item-info';
import { USER_ADMIN_ITEM_INFO_DATA_NAME } from '../../user-admin-item-info/user-admin-item-info.constant';

export const UserAdminListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ px: 8, pb: 8 }}>
        <Alert severity="info">{text('USER_ADMIN_LIST.USER_LIST.EMPTY')}</Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 6, pb: 6 }} disablePadding>
      {list.map((items, key) => (
        <React.Fragment key={key}>
          <ListItem
            key={key}
            onClick={() => {
              return redirect(USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC, {
                dynamic: true,
                params: {
                  userId: items[USER_ADMIN_ITEM_INFO_DATA_NAME.ID],
                },
              });
            }}
            button
          >
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
                <span>
                  {`${text('COMMON.USER.EMAIL')}
                ${items[USER_ADMIN_LIST_DATA_NAME.EMAIL]}
                ${text('COMMON.USER.PHONE')} ${
                    items[USER_ADMIN_LIST_DATA_NAME.PHONE]
                  } 
                
            `}{' '}
                  <>
                    {items[USER_ADMIN_LIST_DATA_NAME.ROLE] === 0 && (
                      <>
                        {text('COMMON.USER.ROLE')}
                        <Typography
                          sx={{
                            color: '#EB5757',
                          }}
                          variant="listContent"
                        >
                          {text('COMMON.USER.USER_ROLE.BLOCKED')}
                        </Typography>
                      </>
                    )}
                  </>
                  <>
                    {items[USER_ADMIN_LIST_DATA_NAME.ROLE] === 2 && (
                      <>
                        {text('COMMON.USER.ROLE')}
                        <Typography
                          sx={{
                            color: '#00cc66',
                          }}
                          variant="listContent"
                        >
                          {text('COMMON.USER.USER_ROLE.ADMIN')}
                        </Typography>
                      </>
                    )}
                  </>
                  <>
                    {text('COMMON.USER.CONFIRM_EMAIL')}
                    {items[USER_ADMIN_LIST_DATA_NAME.CONFIRM_EMAIL] ? (
                      <Typography
                        sx={{
                          color: '#219653',
                        }}
                        variant="listContent"
                      >
                        {text('COMMON.USER.VERIFIED')}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          color: '#EB5757',
                        }}
                        variant="listContent"
                      >
                        {' '}
                        {text('COMMON.USER.NOT_VERIFIED')}
                      </Typography>
                    )}{' '}
                  </>
                  <>
                    {text('COMMON.USER.CONFIRM_PHONE')}{' '}
                    {items[USER_ADMIN_LIST_DATA_NAME.CONFIRM_PHONE] ? (
                      <Typography
                        sx={{
                          color: '#219653',
                        }}
                        variant="listContent"
                      >
                        {text('COMMON.USER.VERIFIED')}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          color: '#EB5757',
                        }}
                        variant="listContent"
                      >
                        {' '}
                        {text('COMMON.USER.NOT_VERIFIED')}
                      </Typography>
                    )}
                  </>
                  <>
                    {' '}
                    {text('Дата регистрации')}{' '}
                    {items[USER_ADMIN_LIST_DATA_NAME.CRATE_DATE]}
                  </>
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
