import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation/navigation.core';
import { ADMIN_REVISION_REVIEW_ITEM_DATA_NAME } from '../../admin-revision-review-item/admin-revision-review-item.constant';
import { COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC } from '../../company-admin-item-revision-list';

export const AdminRevisionReviewItemCompanyComponent = ({ data }) => {
  return (
    <Grid container spacing={4} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMMON.COMPANY.ID')}
        </Typography>
        <Typography variant="body1">
          {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.COMPANY_ID]}
        </Typography>
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMMON.COMPANY.INN')}
        </Typography>
        <Typography variant="body1">
          {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.COMPANY_INN]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('COMMON.COMPANY.COMPANY_NAME')}
        </Typography>
        <Typography variant="body1">
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              return redirect(
                COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC,
                {
                  dynamic: true,
                  params: {
                    companyId:
                      data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.COMPANY_ID],
                  },
                },
              );
            }}
          >
            {data[ADMIN_REVISION_REVIEW_ITEM_DATA_NAME.COMPANY_NAME]}
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
