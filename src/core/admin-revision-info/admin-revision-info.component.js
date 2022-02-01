import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { ReviewStatusComponent } from '../../lib/common/review-status/review-status.component';

import { AdminRevisionInfoItemComponent } from './frame/admin-revision-info-item.component';

export function AdminRevisionInfoComponent({
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
          sx={{ px: 8, pt: 8, pb: 2 }}
          component="div"
        >
          {data.title}
        </Typography>

        <ReviewStatusComponent status={data.status} />

        <Divider sx={{ mx: 8 }} />

        {isSuccess && <AdminRevisionInfoItemComponent data={data} />}
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
