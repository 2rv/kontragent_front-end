import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { CompanyAdminBillListListComponent } from './frame/company-admin-bill-list-list.component';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { text } from '../../lib/common/text';

export function CompanyAdminBillListComponent({
  data,
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
          {text('BILL_ADMIN_LIST.TITLE')}
        </Typography>
        <Typography variant="subTitle" sx={{ px: 8 }} component="div">
          {text('COMPANY_BILL_LIST.DESCRIPTION')}
        </Typography>
        <Divider sx={{ mx: 8, my: 4 }} />
        {isSuccess && <CompanyAdminBillListListComponent list={data} />}
        {isPending && (
          <Box sx={{ pt: 4, px: 8, pb: 8 }}>
            <SkeletonListComponent />
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
