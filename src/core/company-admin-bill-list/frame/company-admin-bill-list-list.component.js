import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { getQuery, redirect } from '../../../main/navigation';
import { text } from '../../../lib/common/text';
import { COMPANY_ADMIN_BILL_LIST_DATA_NAME } from '../company-admin-bill-list.constant';
import Typography from '@mui/material/Typography';
import { ADMIN_BILL_INFO_DATA_NAME } from '../../admin-bill-info/admin-bill-info.constant';
import { ADMIN_BILL_REVISION_ROUTE_PATH_DYNAMIC } from '../../admin-bill-revision';

export const CompanyAdminBillListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">
          {text('COMPANY_BILL_LIST.BILL_LIST.EMPTY')}
        </Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 8, pb: 8 }} disablePadding>
      {list.map((item, key) => (
        <React.Fragment key={key}>
          <ListItem
            onClick={() => {
              return redirect(ADMIN_BILL_REVISION_ROUTE_PATH_DYNAMIC, {
                dynamic: true,
                params: {
                  billId: item[ADMIN_BILL_INFO_DATA_NAME.ID],
                },
              });
            }}
            key={key}
            button
            sx={{ py: 3, px: 3 }}
          >
            <ListItemText
              primary={
                <span>
                  {`               
                    ${item[COMPANY_ADMIN_BILL_LIST_DATA_NAME.AMOUNT]}${text(
                    'COMMON.CURRENCY.RUB',
                  )}
               `}
                </span>
              }
              secondary={
                <span>
                  {`${item[COMPANY_ADMIN_BILL_LIST_DATA_NAME.CREATE_DATE]} `}
                  <>
                    {item[COMPANY_ADMIN_BILL_LIST_DATA_NAME.STATUS] === 1 && (
                      <>
                        <Typography
                          sx={{
                            color: '#EB5757',
                          }}
                          variant="listContent"
                        >
                          {text('COMPANY_BILL_LIST.BILL_LIST.BILL_STATUS.NEW')}
                        </Typography>
                      </>
                    )}
                  </>
                  <>
                    {item[COMPANY_ADMIN_BILL_LIST_DATA_NAME.STATUS] === 2 && (
                      <>
                        <Typography
                          sx={{
                            color: '#3AB8FF',
                          }}
                          variant="listContent"
                        >
                          {text(
                            'COMPANY_BILL_LIST.BILL_LIST.BILL_STATUS.FILLED',
                          )}
                        </Typography>
                      </>
                    )}
                  </>
                  <>
                    {item[COMPANY_ADMIN_BILL_LIST_DATA_NAME.STATUS] === 3 && (
                      <>
                        <Typography
                          sx={{
                            color: '#219653',
                          }}
                          variant="listContent"
                        >
                          {text(
                            'COMPANY_BILL_LIST.BILL_LIST.BILL_STATUS.FULFILLED',
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
