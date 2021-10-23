import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import { USER_REFERAL_INFO_DATA_NAME } from '../user-referal-info.constant';

export const UserReferalInfoListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">
          {text('USER_REFERAL.USER_REFERAL_LIST.EMPTY')}
        </Alert>
      </Box>
    );
  }

  return (
    <List sx={{ px: 6, pb: 8 }} disablePadding>
      <React.Fragment>
        <ListItem sx={{ py: 3, px: 3 }}>
          <ListItemText
            secondary={
              <span>{`${text(
                'USER_REFERAL.USER_REFERAL_INFO.TITLE_INFO.TITLE_BALANCE',
              )}
                       ${text(
                         'USER_REFERAL.USER_REFERAL_INFO.TITLE_INFO.TITLE_REFERAL_MEMBER_COUNT',
                       )}
                        `}</span>
            }
            primary={
              <span>{`${list[USER_REFERAL_INFO_DATA_NAME.BALANCE]}
                        ${
                          list[USER_REFERAL_INFO_DATA_NAME.REFERAL_MEMBER_COUNT]
                        }
                        `}</span>
            }
          />
        </ListItem>
        <Typography
          variant="subTitle"
          color="#707070"
          sx={{ px: 8, pt: 8, pb: 4 }}
          component="div"
        >
          {' '}
          {text('USER_REFERAL.USER_REFERAL_INFO.DESCRIPTION')}{' '}
        </Typography>
      </React.Fragment>
    </List>
  );
};
