import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { getQuery, redirect } from '../../../main/navigation';
import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_ROUTE_PATH_DYNAMIC } from '../../company-account-item-revision-self-item/company-account-item-revision-self-item.constant';
import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_LIST_DATA_NAME as DATA_NAME } from '../company-account-item-revision-self-list.constant';

export function CompanyAccountItemRevisionSelfListViewComponent(props) {
  const { list } = props;

  if (!list || list.length === 0) {
    return (
      <Box sx={{ pb: 8, px: 8 }}>
        <Alert severity="info">
          {text('COMPANY_ACCOUNT_ITEM_REVISION.SELF.LIST.LIST_IS_EMPTY')}
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
                COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_ROUTE_PATH_DYNAMIC,
                {
                  params: {
                    revisionId: item[DATA_NAME.ID],
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
              primary={
                <span>
                  {`${text('COMMON.REVISION.ID')} 
                   ${item[DATA_NAME.ID]} ${text(
                    'COMMON.REVISION.CREATE_DATE',
                  )} ${item[DATA_NAME.CREATE_DATE]}`}
                </span>
              }
              secondary={
                [
                  '',
                  <>
                    <Typography sx={{ color: 'red' }}>
                      {text('COMMON.REVISION.STATUS_TYPE.NEW')}
                    </Typography>
                  </>,
                  <>
                    <Typography sx={{ color: 'blue' }}>
                      {text('COMMON.REVISION.STATUS_TYPE.PROGRESS')}
                    </Typography>
                  </>,
                  <>
                    <Typography sx={{ color: 'green' }}>
                      {text('COMMON.REVISION.STATUS_TYPE.DONE')}
                    </Typography>
                  </>,
                  <>
                    <Typography sx={{ color: 'orange' }}>
                      {text('COMMON.REVISION.STATUS_TYPE.PAY')}
                    </Typography>
                  </>,
                  <>
                    <Typography sx={{ color: 'green' }}>
                      {text('COMMON.REVISION.STATUS_TYPE.PAID')}
                    </Typography>
                  </>,
                ][item[DATA_NAME.STATUS]]
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
}
