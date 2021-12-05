import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ADMIN_BILL_INFO_DATA_NAME } from '../admin-bill-info.constant';
import { text } from '../../../lib/common/text';
import { FileListElement } from '../../../lib/element/file-list.element';

export const AdminBillInfoItemComponent = ({ data }) => {
  return (
    <Grid container spacing={3} sx={{ pt: 4, px: 8, pb: 8 }}>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('ADMIN_BILL_INFO.STATUS')}
        </Typography>
        {data[ADMIN_BILL_INFO_DATA_NAME.STATUS] === 1 && (
          <Typography
            sx={{
              color: '#EB5757',
            }}
            variant="listContent"
          >
            {text('ADMIN_BILL_INFO.BILL_STATUS.NEW')}
          </Typography>
        )}

        {data[ADMIN_BILL_INFO_DATA_NAME.STATUS] === 2 && (
          <Typography
            sx={{
              color: '#3AB8FF',
            }}
            variant="listContent"
          >
            {text('ADMIN_BILL_INFO.BILL_STATUS.FILLED')}
          </Typography>
        )}

        {data[ADMIN_BILL_INFO_DATA_NAME.STATUS] === 3 && (
          <Typography
            sx={{
              color: '#219653',
            }}
            variant="listContent"
          >
            {text('ADMIN_BILL_INFO.BILL_STATUS.FULFILLED')}
          </Typography>
        )}
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('ADMIN_BILL_INFO.AMOUNT')}
        </Typography>
        <Typography variant="body1">
          {data[ADMIN_BILL_INFO_DATA_NAME.AMOUNT]} ₽
        </Typography>
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('ADMIN_BILL_INFO.NAME')}
        </Typography>
        <Typography variant="body1">
          {data[ADMIN_BILL_INFO_DATA_NAME.NAME]}
        </Typography>
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('ADMIN_BILL_INFO.INN')}
        </Typography>
        <Typography variant="body1">
          {data[ADMIN_BILL_INFO_DATA_NAME.INN]}
        </Typography>
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="listTitle" component="div">
          {text('ADMIN_BILL_INFO.DESCRIPTION')}
        </Typography>

        {data[ADMIN_BILL_INFO_DATA_NAME.DESCRIPTION] ? (
          <Typography variant="body1">
            {data[ADMIN_BILL_INFO_DATA_NAME.DESCRIPTION]}
          </Typography>
        ) : (
          <Typography variant="body1">
            {text(
              'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.WE_NOT_COMPILED_RESULT_OF_YOUR_REQUEST',
            )}
          </Typography>
        )}
      </Grid>

      <Grid item>
        {data[ADMIN_BILL_INFO_DATA_NAME.FILES] &&
        data[ADMIN_BILL_INFO_DATA_NAME.FILES].length > 0 ? (
          <FileListElement list={data[ADMIN_BILL_INFO_DATA_NAME.FILES]} />
        ) : null}
      </Grid>
    </Grid>
  );
};
