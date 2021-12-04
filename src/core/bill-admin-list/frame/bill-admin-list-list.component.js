import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { redirect } from '../../../main/navigation';
import { text } from '../../../lib/common/text';
import { BILL_ADMIN_LIST_DATA_NAME } from '../bill-admin-list.constant';
import Typography from '@mui/material/Typography';

export const BillAccountListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">{text('BILL_ADMIN_LIST.BILL_LIST.EMPTY')}</Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 8, pb: 8 }} disablePadding>
      {list.map((item, key) => (
        <React.Fragment key={key}>
          <ListItem key={key} button sx={{ py: 3, px: 3 }}>
            <ListItemText
              primary={
                <span>{`${item[BILL_ADMIN_LIST_DATA_NAME.NAME]} — ${
                  item[BILL_ADMIN_LIST_DATA_NAME.AMOUNT]
                }${text('COMMON.CURRENCY.RUB')}`}</span>
              }
              secondary={
                <span>
                  <>
                    <Typography
                      sx={{
                        color: '#252525',
                      }}
                      variant="listContent"
                    >
                      {item[BILL_ADMIN_LIST_DATA_NAME.INN]}
                    </Typography>
                  </>
                  {` ${item[BILL_ADMIN_LIST_DATA_NAME.CREATE_DATE]} `}
                  <>
                    {item[BILL_ADMIN_LIST_DATA_NAME.STATUS] === 1 && (
                      <>
                        <Typography
                          sx={{
                            color: '#EB5757',
                          }}
                          variant="listContent"
                        >
                          {text('BILL_ADMIN_LIST.BILL_LIST.BILL_STATUS.NEW')}
                        </Typography>
                      </>
                    )}
                  </>
                  <>
                    {item[BILL_ADMIN_LIST_DATA_NAME.STATUS] === 2 && (
                      <>
                        <Typography
                          sx={{
                            color: '#3AB8FF',
                          }}
                          variant="listContent"
                        >
                          {text('BILL_ADMIN_LIST.BILL_LIST.BILL_STATUS.FILLED')}
                        </Typography>
                      </>
                    )}
                  </>
                  <>
                    {item[BILL_ADMIN_LIST_DATA_NAME.STATUS] === 3 && (
                      <>
                        <Typography
                          sx={{
                            color: '#219653',
                          }}
                          variant="listContent"
                        >
                          {text(
                            'BILL_ADMIN_LIST.BILL_LIST.BILL_STATUS.FULFILLED',
                          )}
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
