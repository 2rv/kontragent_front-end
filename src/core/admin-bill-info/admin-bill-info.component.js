import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { AdminBillInfoItemComponent } from './frame/admin-bill-info-item.component';
import { ADMIN_BILL_INFO_DATA_NAME } from './admin-bill-info.constant';

export function AdminBillInfoComponent({
  data,
  pageLoading,
  isPending,
  isError,
  isSuccess,
  errorMessage,
}) {
  return (
    <Paper sx={{ p: 0 }}>
      <Box>
        <Typography
          variant="title"
          sx={{ px: 8, pt: 8, pb: 4 }}
          component="div"
        >
          {text('ADMIN_BILL_INFO.SUB_TITLE')}
          {data[ADMIN_BILL_INFO_DATA_NAME.ID]}
        </Typography>
        <Typography variant="subTitle" sx={{ px: 8, pb: 4 }} component="div">
          {text('ADMIN_BILL_INFO.DESCRIPTION')}
        </Typography>
        <Divider sx={{ mx: 8 }} />

        {isSuccess && <AdminBillInfoItemComponent data={data} />}
        {isPending && (
          <Box sx={{ pt: 4, px: 8, pb: 8 }}>
            <SkeletonListComponent text={true} />
          </Box>
        )}
        {isError && (
          <Box sx={{ pt: 4, px: 8, pb: 8 }}>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Box>
        )}
      </Box>
    </Paper>
  );
}
