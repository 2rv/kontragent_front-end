import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CompanyAccountItemMemberDeleteContainer } from '../../company-account-item-member-delete/company-account-item-member-delete.container'

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME } from '../company-account-item-member-list.constant';

export const CompanyAccountItemPaymentListListComponent = ({ list }) => {

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
        <React.Fragment key={key}>
          <ListItem sx={{ py: 3, px: 3 }}
            secondaryAction={
              <CompanyAccountItemMemberDeleteContainer companyMemberId={item[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.ID]} />
            }
          >
            <ListItemText
              primary={
                <span>{`${item[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.FIRSTNAME]
                  } ${item[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.LASTNAME]
                  } (${item[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.LOGIN]
                  })`}</span>
              }
              secondary={
                <span>{`${item[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.ROLE] === 1
                  ? text('COMMON.COMPANY_MEMBER_ROLE.OWNER')
                  : text('COMMON.COMPANY_MEMBER_ROLE.EMPLOYEE')
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
