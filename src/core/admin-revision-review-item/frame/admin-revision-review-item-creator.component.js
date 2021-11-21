import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation/navigation.core';
import { ADMIN_REVISION_REVIEW_ITEM_DATA_NAME } from '../../admin-revision-review-item/admin-revision-review-item.constant';
import {
  USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC,
  USER_ADMIN_ITEM_INFO_DATA_NAME,
} from '../../user-admin-item-info/user-admin-item-info.constant';

export const AdminRevisionReviewItemCreatorComponent = ({ data }) => {
  return (
    <Grid container spacing={4} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMMON.USER.FISRT_NAME')}
        </Typography>
        <Typography variant="body1">
          {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.CREATOR_FIRSTNAME]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMMON.USER.LAST_NAME')}
        </Typography>
        <Typography variant="body1">
          {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.CREATOR_LASTNAME]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMMON.USER.LOGIN')}
        </Typography>
        <Typography variant="body1">
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              return redirect(USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC, {
                dynamic: true,
                params: {
                  userId: data[USER_ADMIN_ITEM_INFO_DATA_NAME.ID],
                },
              });
            }}
          >
            {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.CREATOR_LOGIN]}
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
