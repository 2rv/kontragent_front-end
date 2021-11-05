import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { redirect } from '../../../main/navigation';
import { text } from '../../../lib/common/text';
import { ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH_DYNAMIC } from '../../admin-revision-review-item';

import { COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME } from '../company-admin-item-revision-list.constant';

export const CompanyAdminItemRevisionListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ py: 4, px: 8 }}>
        <Alert severity="info">
          {text('COMPANY_ADMIN_ITEM_REVISION.REVISION_LIST.EMPTY')}
        </Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 8, pb: 8 }} disablePadding>
      {list.map((item, key) => (
        <React.Fragment key={key}>
          <ListItem
            key={key}
            onClick={() => {
              return redirect(ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH_DYNAMIC, {
                dynamic: true,
                params: {
                  revisionId:
                    item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.ID],
                },
              });
            }}
            button
            sx={{ py: 3, px: 3 }}
          >
            <ListItemText
              primary={`${text('COMMON.REVISION.TITLE')} ${[
                item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.TITLE],
              ]}`}
              secondary={`
                ${
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
                  ][item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.STATUS]]
                },
                ${text('COMMON.REVISION.PRICE')} ${[
                item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.PRICE],
              ]}, ${text('COMMON.REVISION.ID')} ${[
                item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.ID],
              ]}
              `}
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
