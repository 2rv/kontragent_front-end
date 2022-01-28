import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { getQuery, redirect } from '../../../main/navigation';
import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_DATA_NAME } from '../company-account-item-kontragent.constant';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_ROUTE_PATH_DYNAMIC } from '../../company-account-item-kontragent-item-info';

export function CompanyAccountItemKontragentListComponent(props) {
  const { list } = props;
  if (!list || list.length === 0) {
    return (
      <Box sx={{ px: 8, pb: 8 }}>
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
                COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_ROUTE_PATH_DYNAMIC,
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
              primary={item[COMPANY_ACCOUNT_ITEM_KONTRAGENT_DATA_NAME.NAME]}
              secondary={
                <>
                  <Typography
                    sx={{
                      color: '#252525',
                    }}
                    variant="listContent"
                  >
                    {item[COMPANY_ACCOUNT_ITEM_KONTRAGENT_DATA_NAME.INN]}
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
}
