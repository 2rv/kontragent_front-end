import Paper from '@mui/material/Paper';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { text } from '../../lib/common/text';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { CompanyAccountKontragentItemInfoListComponent } from './frame/company-account-kontragent-info-list.component';

export function CompanyAccountKontragentItemInfoComponent({
  data,
  isPending,
  isError,
  isSuccess,
  errorMessage,
  removeKontragent,
}) {
  return (
    <Paper sx={{ p: 0 }}>
      <Box>
        {isSuccess && <CompanyAccountKontragentItemInfoListComponent data={data} removeKontragent={removeKontragent} />}
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
