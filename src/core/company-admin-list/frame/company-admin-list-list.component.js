import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { redirect } from '../../../main/navigation';

import { COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC } from '../../company-admin-item-revision-list';

import { text } from '../../../lib/common/text';

import { COMPANY_ADMIN_LIST_DATA_NAME } from '../company-admin-list.constant';

export const CompanyAccountListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ px: 8, pb: 8 }}>
        <Alert severity="info">
          {text('COMPANY_ADMIN_LIST.COMPANY_LIST.EMPTY')}
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
                COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC,
                {
                  dynamic: true,
                  params: {
                    companyId: item[COMPANY_ADMIN_LIST_DATA_NAME.ID],
                  },
                },
              );
            }}
            key={key}
            button
            sx={{ py: 3, px: 3 }}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <span>
                  {text('COMMON.COMPANY.ID')}
                  {item[COMPANY_ADMIN_LIST_DATA_NAME.ID]},{' '}
                  {item[COMPANY_ADMIN_LIST_DATA_NAME.NAME] && (
                    <>{item[COMPANY_ADMIN_LIST_DATA_NAME.NAME]}, </>
                  )}{' '}
                  {item[COMPANY_ADMIN_LIST_DATA_NAME.INN]}{' '}
                </span>
              }
              secondary={
                <span>
                  {`${text('COMMON.COMPANY.BALANCE_VERIFICATION')}`}{' '}
                  {item[COMPANY_ADMIN_LIST_DATA_NAME.VERIFICATE_PAYMENT] ? (
                    <Typography
                      sx={{
                        color: '#219653',
                      }}
                      variant="listContent"
                    >
                      {text('COMMON.COMPANY.VERIFIED')}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        color: '#EB5757',
                      }}
                      variant="listContent"
                    >
                      {text('COMMON.COMPANY.NOT_VERIFIED')}
                    </Typography>
                  )}
                  , {` ${text('COMMON.COMPANY.DATA_VERIFICATION')}`}
                  {item[COMPANY_ADMIN_LIST_DATA_NAME.VERIFICATE_INFO] ? (
                    <Typography
                      sx={{
                        color: '#219653',
                      }}
                      variant="listContent"
                    >
                      {' '}
                      {text('COMMON.COMPANY.VERIFIED')}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        color: '#EB5757',
                      }}
                      variant="listContent"
                    >
                      {' '}
                      {text('COMMON.COMPANY.NOT_VERIFIED')}{' '}
                    </Typography>
                  )}
                  , {`${text('COMMON.COMPANY.BALANCE')}`}
                  {item[COMPANY_ADMIN_LIST_DATA_NAME.AMOUNT] + '₽'}
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
