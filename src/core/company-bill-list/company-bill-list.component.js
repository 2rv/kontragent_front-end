import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { CompanyBillListListComponent } from './frame/company-bill-list-list.component';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { text } from '../../lib/common/text';

export function CompanyBillListComponent({
  data,
  isPending,
  isError,
  isSuccess,
  errorMessage,
}) {
  return (
    <Paper>
      <Box>
        <Typography variant="title" gutterBottom component="div">
          {text('BILL_ADMIN_LIST.TITLE')}
        </Typography>
        <Typography variant="subTitle" component="div">
          {text('COMPANY_BILL_LIST.DESCRIPTION')}
        </Typography>
        <Divider sx={{ my: 4 }} />
        {isSuccess && <CompanyBillListListComponent list={data} />}
        {isPending && (
          <Box sx={{ pt: 4 }}>
            <SkeletonListComponent />
          </Box>
        )}
        {isError && (
          <Box sx={{ pt: 4 }}>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Box>
        )}
      </Box>
    </Paper>
  );
}
