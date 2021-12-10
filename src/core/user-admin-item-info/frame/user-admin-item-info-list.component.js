import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../../lib/common/text';

import { USER_ADMIN_ITEM_INFO_DATA_NAME } from '../user-admin-item-info.constant';

export const UserAdminItemInfoListComponent = ({ data }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('USER_ADMIN_ITEM_INFO.LOGIN')}
        </Typography>
        <Typography component="div" variant="body1">
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.LOGIN]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('USER_ADMIN_ITEM_INFO.FISRT_NAME')}
        </Typography>
        <Typography component="div" variant="body1">
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.FIRST_NAME]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('USER_ADMIN_ITEM_INFO.LAST_NAME')}
        </Typography>
        <Typography component="div" variant="body1">
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.LAST_NAME]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('USER_ADMIN_ITEM_INFO.EMAIL')}
        </Typography>
        <Typography component="div" variant="body1">
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.EMAIL]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('USER_ADMIN_ITEM_INFO.PHONE')}
        </Typography>
        <Typography component="div" variant="body1">
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.PHONE]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('USER_ADMIN_ITEM_INFO.CONFIRM_EMAIL')}
        </Typography>
        <Typography
          component="div"
          sx={{
            color:
              !data[USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_EMAIL] && '#EB5757',
          }}
          variant="body1"
        >
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_EMAIL]
            ? text('USER_ADMIN_ITEM_INFO.VERIFIED')
            : text('USER_ADMIN_ITEM_INFO.NOT_VERIFIED')}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('USER_ADMIN_ITEM_INFO.CONFIRM_PHONE')}
        </Typography>
        <Typography
          component="div"
          sx={{
            color:
              !data[USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_PHONE] && '#EB5757',
          }}
          variant="body1"
        >
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_PHONE]
            ? text('USER_ADMIN_ITEM_INFO.VERIFIED')
            : text('USER_ADMIN_ITEM_INFO.NOT_VERIFIED')}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('USER_ADMIN_ITEM_INFO.ROLE')}
        </Typography>
        <Typography
          component="div"
          sx={{
            color: !data[USER_ADMIN_ITEM_INFO_DATA_NAME.ROLE] && '#EB5757',
          }}
          variant="body1"
        >
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.ROLE] === 1 &&
            text('USER_ADMIN_ITEM_INFO.USER_ROLE.OWNER')}
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.ROLE] === 0 &&
            text('USER_ADMIN_ITEM_INFO.USER_ROLE.BLOCKED')}
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.ROLE] === 2 &&
            text('USER_ADMIN_ITEM_INFO.USER_ROLE.ADMIN')}
        </Typography>
      </Grid>
    </Grid>
  );
};
