import React from 'react';
import Typography from '@mui/material/Typography';
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
      <Box sx={{ pb: 8, px: 8 }}>
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
              primary={
                <span>
                  {`
                  ${text('COMMON.REVISION.ID')}
                      ${item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.ID]}
                      ${text('COMMON.REVISION.CREATE_DATE')}
                      ${
                        item[
                          COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.CREATE_DATE
                        ]
                      }
                  `}
                </span>
              }
              secondary={
                <span>
                  <>
                    {item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.STATUS] ===
                      1 && (
                      <>
                        <Typography sx={{ color: 'red' }}>
                          {text('COMMON.REVISION.STATUS_TYPE.NEW')}
                        </Typography>
                      </>
                    )}
                    {item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.STATUS] ===
                      2 && (
                      <>
                        <Typography sx={{ color: 'blue' }}>
                          {text('COMMON.REVISION.STATUS_TYPE.PROGRESS')}
                        </Typography>
                      </>
                    )}
                    {item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.STATUS] ===
                      3 && (
                      <>
                        <Typography sx={{ color: 'green' }}>
                          {text('COMMON.REVISION.STATUS_TYPE.DONE')}
                        </Typography>
                      </>
                    )}
                    {item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.STATUS] ===
                      4 && (
                      <>
                        <Typography sx={{ color: 'orange' }}>
                          {text('COMMON.REVISION.STATUS_TYPE.PAY')}
                        </Typography>
                      </>
                    )}
                    {item[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.STATUS] ===
                      5 && (
                      <>
                        <Typography sx={{ color: 'green' }}>
                          {text('COMMON.REVISION.STATUS_TYPE.PAID')}
                        </Typography>
                      </>
                    )}
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
