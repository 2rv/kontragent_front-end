import React from 'react';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME } from '../company-account-item-payment-list.constant';

export const CompanyAccountItemPaymentListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">
          {text('COMPANY_ACCOUNT_ITEM_PAYMENT.PAYMENT_LIST.EMPTY')}
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
                <span>
                  {text('COMMON.SUMM')}:{' '}
                  {item[COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME.AMOUNT]}{' '}
                  {text('CURRENCY.RUB')}
                </span>
              }
              secondary={
                <span>
                  {`${
                    item[
                      COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME.CREATE_DATE
                    ]
                  } `}
                  {item[COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME.TYPE].text}
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
