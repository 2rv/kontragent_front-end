import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation';

import { ADMIN_REVISION_SELF_ITEM_ROUTE_PATH_DYNAMIC } from '../../admin-revision-self-item/admin-revision-self-item.constant';

import { ADMIN_REVISION_SELF_LIST_DATA_NAME as DATA_NAME } from '../admin-revision-self-list.constant';

export function AdminRevisionSelfListViewComponent(props) {
  const { list } = props;

  if (!list || list.length === 0) {
    return (
      <Box sx={{ px: 8, pb: 8 }}>
        <Alert severity="info">{text('REVISION_ADMIN_LIST.EMPTY')}</Alert>
      </Box>
    );
  }

  const handleClick = (revisionId) => {
    redirect(ADMIN_REVISION_SELF_ITEM_ROUTE_PATH_DYNAMIC, {
      params: {
        revisionId: revisionId,
      },
    });
  };
  return (
    <List sx={{ px: 6, pb: 6 }} disablePadding>
      {list.map((items, key) => (
        <React.Fragment key={key}>
          <ListItem
            button
            key={key}
            onClick={() => handleClick(items[DATA_NAME.ID])}
            sx={{ py: 3, px: 3 }}
          >
            <ListItemText
              primary={
                <span>
                  {`
                    ${text('COMMON.REVISION.ID')}
                        ${items[DATA_NAME.ID]}
                    ${text('COMMON.REVISION.CREATE_DATE')}
                        ${items[DATA_NAME.CREATE_DATE]}
                    `}
                </span>
              }
              secondary={
                [
                  '',
                  text('COMMON.REVISION.STATUS_TYPE.NEW'),
                  text('COMMON.REVISION.STATUS_TYPE.PROGRESS'),
                  text('COMMON.REVISION.STATUS_TYPE.DONE'),
                  <Typography sx={{ color: 'orange' }}>
                    {text('COMMON.REVISION.STATUS_TYPE.PAY')}
                  </Typography>,
                  text('COMMON.REVISION.STATUS_TYPE.PAID'),
                ][items[DATA_NAME.STATUS]]
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
}
