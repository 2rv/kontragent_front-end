import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../../lib/common/text';

import { COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME } from '../company-admin-item-info-list.constant';

export const CompanyAdminItemInfoListListComponent = ({ data }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.NAME] && (
        <Grid item>
          <Typography sx={{ mr: 1 }} variant="listTitle">
            {text('COMMON.COMPANY.COMPANY_NAME')}
          </Typography>
          <Typography variant="listContent">
            {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.NAME]}
          </Typography>
        </Grid>
      )}
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.COMPANY.ID')}
        </Typography>
        <Typography variant="listContent">
          {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.ID]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.COMPANY.INN')}
        </Typography>
        <Typography variant="listContent">
          {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.INN]}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.COMPANY.DATA_VERIFICATION')}
        </Typography>
        <Typography
          sx={{
            color:
              !data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_INFO] &&
              '#F2994A',
          }}
          variant="listContent"
        >
          {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_INFO]
            ? text('COMMON.COMPANY.VERIFIED')
            : text('COMMON.COMPANY.NOT_VERIFIED')}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ mr: 1 }} variant="listTitle">
          {text('COMMON.COMPANY.BALANCE_VERIFICATION')}
        </Typography>
        <Typography
          sx={{
            color:
              !data[
                COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_PAYMENT
              ] && '#F2994A',
          }}
          variant="listContent"
        >
          {data[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_PAYMENT]
            ? text('COMMON.COMPANY.VERIFIED')
            : text('COMMON.COMPANY.NOT_VERIFIED')}
        </Typography>
      </Grid>
    </Grid>
  );
};
