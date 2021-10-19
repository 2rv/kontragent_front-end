import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { text } from '../../lib/common/text';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { UserAdminItemCompanyListListComponent } from './frame/user-admin-item-company-list-list.component';

export function UserAdminItemCompanyListComponent({
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
          variant="heading"
          sx={{ px: 8, pt: 8, pb: 4 }}
          component="div"
        >
          {text('USER_ADMIN_ITEM_COMPANY_LIST.TITLE')}
        </Typography>
        <Divider sx={{ mx: 8 }} />
        {isSuccess && <UserAdminItemCompanyListListComponent list={data} />}
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
