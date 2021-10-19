import React from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import { text } from '../../../lib/common/text';

import { COMPANY_ADMIN_ITEM_MEMBER_LIST_DATA_NAME } from '../company-admin-item-member-list.constant';

export const CompanyAdminItemPaymentListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ py: 4, px: 8 }}>
        <Alert severity="info">
          {text('COMPANY_ACCOUNT_ITEM_MEMBER.MEMBER_LIST.EMPTY')}
        </Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 8, pb: 8 }} disablePadding>
      {list.map((item, key) => (
        <React.Fragment>
          <ListItem key={key} sx={{ py: 3, px: 3 }}>
            <ListItemText
              primary={
                <span>{`${
                  item[COMPANY_ADMIN_ITEM_MEMBER_LIST_DATA_NAME.FIRSTNAME]
                } ${
                  item[COMPANY_ADMIN_ITEM_MEMBER_LIST_DATA_NAME.LASTNAME]
                } (${text('COMMON.USER.LOGIN')} ${
                  item[COMPANY_ADMIN_ITEM_MEMBER_LIST_DATA_NAME.LOGIN]
                }, ${text('COMMON.USER.EMAIL')} ${
                  item[COMPANY_ADMIN_ITEM_MEMBER_LIST_DATA_NAME.EMAIL]
                }, ${text('COMMON.USER.PHONE')} ${
                  item[COMPANY_ADMIN_ITEM_MEMBER_LIST_DATA_NAME.PHONE]
                })`}</span>
              }
              secondary={
                <span>{`${
                  item[COMPANY_ADMIN_ITEM_MEMBER_LIST_DATA_NAME.ROLE] === 1
                    ? text('COMMON.COMPANY_MEMBER_ROLE.OWNER')
                    : text('COMMON.COMPANY_MEMBER_ROLE.EMPLOYEE')
                }, ${text('COMMON.USER.ID')} ${
                  item[COMPANY_ADMIN_ITEM_MEMBER_LIST_DATA_NAME.ID]
                }`}</span>
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
