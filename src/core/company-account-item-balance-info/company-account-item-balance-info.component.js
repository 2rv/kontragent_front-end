import Paper from '@mui/material/Paper';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { CompanyAccountItemBalanceInfoListComponent } from './frame/company-account-item-balance-info-list.component';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { text } from '../../lib/common/text';

export function CompanyAccountItemBalanceInfoComponent({
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
          {text('COMPANY_ACCOUNT_ITEM_BALANCE.BALANCE_INFO.TITLE')}
        </Typography>
        <Divider sx={{ mx: 8 }} />
        {isSuccess && (
          <CompanyAccountItemBalanceInfoListComponent data={data} />
        )}
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
