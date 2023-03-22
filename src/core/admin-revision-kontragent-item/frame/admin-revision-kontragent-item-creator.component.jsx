import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation/navigation.core';

import { USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC } from '../../user-admin-item-info/user-admin-item-info.constant';

import { ADMIN_REVISION_KONTRAGENT_ITEM_DATA_NAME as DATA_NAME } from '../admin-revision-kontragent-item.constant';

export const AdminRevisionKontragentItemCreatorComponent = (props) => {
  const { data } = props;

  const handleClick = () => {
    redirect(USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC, {
      params: {
        userId: data[DATA_NAME.CREATOR_ID],
      },
    });
  };
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography
          gutterBottom
          variant="listTitle"
          component="div"
          children={text('COMMON.USER.FISRT_NAME')}
        />
        <Typography
          variant="listContent"
          children={data[DATA_NAME.CREATOR_FIRSTNAME]}
        />
      </Grid>

      <Grid item>
        <Typography
          variant="listTitle"
          component="div"
          children={text('COMMON.USER.LAST_NAME')}
        />
        <Typography
          variant="listContent"
          children={data[DATA_NAME.CREATOR_LASTNAME]}
        />
      </Grid>

      <Grid item>
        <Typography
          variant="listTitle"
          component="div"
          children={text('COMMON.USER.LOGIN')}
        />
        <Link
          component="button"
          variant="listContent"
          onClick={handleClick}
          children={data[DATA_NAME.CREATOR_LOGIN]}
        />
      </Grid>
    </Grid>
  );
};
