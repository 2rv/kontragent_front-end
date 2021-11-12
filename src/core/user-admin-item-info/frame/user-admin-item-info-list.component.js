import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../../lib/common/text';

import { USER_ADMIN_ITEM_INFO_DATA_NAME } from '../user-admin-item-info.constant';

export const UserAdminItemInfoListComponent = ({ data }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.USER.LOGIN')}
        </Typography>
        <Typography variant="listContent">
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.LOGIN]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.USER.FISRT_NAME')}
        </Typography>
        <Typography variant="listContent">
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.FIRST_NAME]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.USER.LAST_NAME')}
        </Typography>
        <Typography variant="listContent">
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.LAST_NAME]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.USER.EMAIL')}
        </Typography>
        <Typography variant="listContent">
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.EMAIL]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.USER.PHONE')}
        </Typography>
        <Typography variant="listContent">
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.PHONE]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.USER.CONFIRM_EMAIL')}
        </Typography>
        <Typography
          sx={{
            color:
              !data[USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_EMAIL] && '#F2994A',
          }}
          variant="listContent"
        >
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_EMAIL]
            ? text('COMMON.USER.VERIFIED')
            : text('COMMON.USER.NOT_VERIFIED')}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.USER.CONFIRM_PHONE')}
        </Typography>
        <Typography
          sx={{
            color:
              !data[USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_PHONE] && '#F2994A',
          }}
          variant="listContent"
        >
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_PHONE]
            ? text('COMMON.USER.VERIFIED')
            : text('COMMON.USER.NOT_VERIFIED')}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.USER.ROLE')}
        </Typography>
        <Typography
          sx={{
            color: !data[USER_ADMIN_ITEM_INFO_DATA_NAME.ROLE] && '#F2994A',
          }}
          variant="listContent"
        >
          {data[USER_ADMIN_ITEM_INFO_DATA_NAME.ROLE] === 1
            ? text('COMMON.USER.USER_ROLE.OWNER')
            : text('COMMON.USER.USER_ROLE.BLOCKED')}
        </Typography>
      </Grid>
    </Grid>
  );
};
