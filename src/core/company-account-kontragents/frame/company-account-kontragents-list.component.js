import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { getQuery, redirect } from '../../../main/navigation';

import { text } from '../../../lib/common/text';
import { COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME } from '../company-account-kontragents.constant';
import { COMPANY_ACCOUNT_KONTRAGENT_INFO_ROUTE_PATH_DYNAMIC } from '../../company-account-kontragent-info';

export const CompanyAccountKontragentsListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">
          {text('COMPANY_ACCOUNT_KONTRAGENTS.LIST_EMPTY')}
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
              return redirect(
                COMPANY_ACCOUNT_KONTRAGENT_INFO_ROUTE_PATH_DYNAMIC,
                {
                  dynamic: true,
                  params: {
                    companyId: getQuery('companyId'),
                    kontragentId: item.id,
                  },
                },
              );
            }}
            button
            sx={{
              py: 3,
              px: 3,
              ':hover': {
                backgroundColor: '#F3F3F3',
              },
            }}
          >
            <ListItemText
              primary={item[COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.NAME]}
              secondary={
                <>
                  <Typography
                    sx={{
                      color: '#252525',
                    }}
                    variant="listContent"
                  >
                    {item[COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.INN]}
                  </Typography>
                </>
              }
            />
          </ListItem>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
