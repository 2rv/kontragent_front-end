import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { redirect } from '../../../main/navigation';

import { text } from '../../../lib/common/text';
import { ADMIN_REVISION_REVIEW_ITEM_DATA_NAME } from '../../admin-revision-review-item/admin-revision-review-item.constant';
import { COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC } from '../../company-admin-item-revision-list';
import { USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME } from '../user-admin-item-company-list.constant';

export const UserAdminItemCompanyListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, pb: 8, px: 8 }}>
        <Alert severity="info">
          {text('USER_ADMIN_ITEM_COMPANY_LIST.EMPTY')}
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
              return redirect(
                COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC,
                {
                  dynamic: true,
                  params: {
                    companyId:
                      item[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.COMPANY_ID],
                  },
                },
              );
            }}
            key={key}
            button
            sx={{ py: 3, px: 3 }}
          >
            <ListItemText
              primary={`${text('COMMON.COMPANY.ID')} ${
                item[USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.ID]
              }, ${text('COMMON.COMPANY.COMPANY_NAME')} ${
                item[USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.NAME]
              }, ${text('COMMON.COMPANY.INN')} ${
                item[USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.INN]
              }`}
              secondary={`${text('COMMON.COMPANY.ROLE')} 
                ${
                  item[USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.ROLE] === 1
                    ? text('COMMON.USER.USER_ROLE.OWNER')
                    : text('COMMON.USER.USER_ROLE.BLOCKED')
                }`}
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
