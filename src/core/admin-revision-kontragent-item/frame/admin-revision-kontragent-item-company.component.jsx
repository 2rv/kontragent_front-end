import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation/navigation.core';

import { COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC } from '../../company-admin-item-revision-list';

import { ADMIN_REVISION_KONTRAGENT_ITEM_DATA_NAME as DATA_NAME } from '../admin-revision-kontragent-item.constant';

export const AdminRevisionKontragentItemCompanyComponent = (props) => {
  const { data } = props;

  const handleClick = () => {
    redirect(COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC, {
      params: {
        companyId: data[DATA_NAME.COMPANY_ID],
      },
    });
  };

  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography
          variant="listTitle"
          component="div"
          children={text('COMMON.COMPANY.ID')}
        />
        <Typography
          variant="listContent"
          children={data[DATA_NAME.COMPANY_ID]}
        />
      </Grid>

      <Grid item>
        <Typography
          variant="listTitle"
          component="div"
          children={text('COMMON.COMPANY.INN')}
        />
        <Typography
          variant="listContent"
          children={data[DATA_NAME.COMPANY_INN]}
        />
      </Grid>

      <Grid item>
        <Typography
          variant="listTitle"
          component="div"
          children={text('COMMON.COMPANY.COMPANY_NAME')}
        />
        <Link
          component="button"
          variant="listContent"
          onClick={handleClick}
          children={data[DATA_NAME.COMPANY_NAME]}
        />
      </Grid>
    </Grid>
  );
};
