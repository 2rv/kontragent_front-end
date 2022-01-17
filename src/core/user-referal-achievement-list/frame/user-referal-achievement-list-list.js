import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { text } from '../../../lib/common/text';
import { USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME } from '../user-referal-achievement-list.constant';
import Typography from '@mui/material/Typography';

export const UserReferalAchievementListListComponent = ({ list }) => {
  if (!list || list.length === 0) {
    return (
      <Box sx={{ pt: 4, px: 8, pb: 8 }}>
        <Alert severity="info">
          {text('USER_REFERAL.USER_REFERAL_ACHIEVEMENT_LIST.EMPTY')}
        </Alert>
      </Box>
    );
  }

  return (
    <Grid sx={{ px: 6, pb: 8 }} container direction="column" disablePadding>
      {list.map((items, key) => (
        <React.Fragment key={key}>
          <Grid container direction="row">
            <Grid item xs={6} sx={{ py: 3, px: 3 }}>
              <Typography variant="listContent">
                {items[USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.FIRSTNAME]}{' '}
                {items[USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.LASTNAME]}
              </Typography>
              <Typography sx={{ color: '#252525', py: 2 }}>
                {items[USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.TYPE]}
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" alignItems="flex-end" sx={{ py: 3 }}>
              <Typography>
                {items[USER_REFERAL_ACHIEVEMENT_LIST_DATA_NAME.AWARD]}
                {text('COMMON.CURRENCY.RUB')}
              </Typography>
            </Grid>
          </Grid>
          {key !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Grid>
  );
};
