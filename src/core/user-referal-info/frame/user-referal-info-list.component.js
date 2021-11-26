import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import { USER_REFERAL_INFO_DATA_NAME } from '../user-referal-info.constant';
import { Grid } from '@mui/material';

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
    <Box sx={{ py: 4, px: 8 }}>
      <Grid container direction="row" justifyContent="flex-start">
        <Grid item xs={12} xl={6}>
          <List
            sx={{
              pb: 4,
              display: 'flex',
              alignItems: 'flex-start',
            }}
            disablePadding
          >
            <ListItem sx={{ pr: 4 }} disablePadding>
              <ListItemText
                secondary={
                  <span>
                    <>
                      <Typography
                        variant="listContent"
                        sx={{
                          color: '#252525',
                          py: 1,
                          fontSize: '18px',
                        }}
                      >
                        {list[USER_REFERAL_INFO_DATA_NAME.BALANCE]}
                        {text('COMMON.CURRENCY.RUB')}
                      </Typography>{' '}
                    </>{' '}
                  </span>
                }
                primary={
                  <span>
                    <>
                      <Typography
                        sx={{
                          color: '#707070',
                          whiteSpace: 'nowrap',
                          fontSize: '14px',
                        }}
                      >
                        {' '}
                        {text(
                          'USER_REFERAL.USER_REFERAL_INFO.TITLE_INFO.TITLE_BALANCE',
                        )}
                      </Typography>
                    </>
                  </span>
                }
              />
            </ListItem>
            <ListItem sx={{ pr: 4 }} disablePadding>
              <ListItemText
                secondary={
                  <span>
                    <>
                      <Typography
                        variant="listContent"
                        sx={{
                          color: '#252525',
                          py: 1,
                          fontSize: '18px',
                        }}
                      >
                        {list[USER_REFERAL_INFO_DATA_NAME.REFERAL_MEMBER_COUNT]}
                      </Typography>
                    </>{' '}
                  </span>
                }
                primary={
                  <span>
                    <>
                      <Typography
                        sx={{
                          color: '#707070',
                          whiteSpace: 'nowrap',
                          fontSize: '14px',
                        }}
                      >
                        {text(
                          'USER_REFERAL.USER_REFERAL_INFO.TITLE_INFO.TITLE_REFERAL_MEMBER_COUNT',
                        )}
                      </Typography>
                    </>{' '}
                  </span>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography color="#707070">
            {' '}
            {text('USER_REFERAL.USER_REFERAL_INFO.DESCRIPTION')}{' '}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
