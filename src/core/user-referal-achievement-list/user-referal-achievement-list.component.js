import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { UserReferalAchievementListListComponent } from './frame/user-referal-achievement-list-list';

export function UserReferalAchievementComponent({
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
          {' '}
          {text('USER_REFERAL.USER_REFERAL_ACHIEVEMENT_LIST.TITLE')}{' '}
        </Typography>
        <Divider sx={{ mx: 8 }} />
        {isSuccess && <UserReferalAchievementListListComponent list={data} />}
        {isPending && (
          <Box sx={{ pt: 4, px: 8, pb: 8 }}>
            {' '}
            <SkeletonListComponent />{' '}
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
