import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { getQuery, redirect } from '../../../main/navigation';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME } from '../company-account-item-revision-list.constant';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_ROUTE_PATH_DYNAMIC } from '../../company-account-item-revision-item';

export const CompanyAccountItemRevisionListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ py: 4, px: 8 }}>
        <Alert severity="info">
          {text(
            'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_LIST.YOUR_LIST_IS_EMPTY',
          )}
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
                COMPANY_ACCOUNT_ITEM_REVISION_ITEM_ROUTE_PATH_DYNAMIC,
                {
                  dynamic: true,
                  params: {
                    revisionId:
                      item[COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.ID],
                    companyId: getQuery('companyId'),
                  },
                },
              );
            }}
            key={key}
            button
            sx={{ py: 3, px: 3 }}
          >
            <ListItemText
              primary={item[COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.TITLE]}
              secondary={
                [
                  '',
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_LIST.NEW_APPLICATION',
                  ),
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_LIST.IN_PROGRESS',
                  ),
                  text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_LIST.DONE'),
                  text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_LIST.ADDITION_PAYMENT_IS_REQUIRED',
                  ),
                ][item[COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.STATUS]]
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
