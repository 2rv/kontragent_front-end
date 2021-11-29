import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { redirect } from '../../../main/navigation';

import { COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH_DYNAMIC } from '../../company-account-item-balance';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_LIST_DATA_NAME } from '../company-account-list.constant';

export const CompanyAccountListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">
          {text('COMPANY_ACCOUNT_LIST.COMPANY_LIST.EMPTY')}
        </Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 8, pb: 8 }} disablePadding>
      {list.map((item, key) => (
        <React.Fragment>
          <ListItem
            onClick={() => {
              return redirect(COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH_DYNAMIC, {
                dynamic: true,
                params: {
                  companyId: item[COMPANY_ACCOUNT_LIST_DATA_NAME.ID],
                },
              });
            }}
            key={key}
            button
            sx={{
              py: 3,
              px: 3,
              ':hover': {
                backgroundColor: '#F3F3F3',
              }
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item[COMPANY_ACCOUNT_LIST_DATA_NAME.NAME]}
              secondary={
                item[COMPANY_ACCOUNT_LIST_DATA_NAME.COMPANY_MEMBER_ROLE] === 1
                  ? text('COMMON.COMPANY_MEMBER_ROLE.OWNER')
                  : text('COMMON.COMPANY_MEMBER_ROLE.EMPLOYEE')
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
