import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../../lib/common/text';

import { COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME } from '../company-admin-item-info-list.constant';

export const CompanyAdminItemInfoListListComponent = ({ data }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.NAME] && (
        <Grid item>
          <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
            {text('COMPANY_ADMIN_ITEM_INFO.COMPANY_NAME')}
          </Typography>
          <Typography component="div" variant="body1">
            {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.NAME]}
          </Typography>
        </Grid>
      )}
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('COMPANY_ADMIN_ITEM_INFO.ID')}
        </Typography>
        <Typography component="div" variant="body1">
          {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.ID]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('COMPANY_ADMIN_ITEM_INFO.INN')}
        </Typography>
        <Typography component="div" variant="body1">
          {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.INN]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('COMPANY_ADMIN_ITEM_INFO.DATA_VERIFICATION')}
        </Typography>
        <Typography
          component="div"
          sx={{
            color:
              !data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_INFO] &&
              '#EB5757',
          }}
          variant="body1"
        >
          {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_INFO] ? (
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
            text('COMMON.COMPANY.NOT_VERIFIED')
          )}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" sx={{ mr: 1 }} variant="listTitle">
          {text('COMPANY_ADMIN_ITEM_INFO.BALANCE_VERIFICATION')}
        </Typography>
        <Typography
          component="div"
          sx={{
            color:
              !data[
                COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_PAYMENT
              ] && '#EB5757',
          }}
          variant="body1"
        >
          {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_PAYMENT] ? (
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
            text('COMMON.COMPANY.NOT_VERIFIED')
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};
