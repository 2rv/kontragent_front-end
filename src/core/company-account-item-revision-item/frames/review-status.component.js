import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';

export const ReviewStatus = ({ status }) => {
  const reviewText = [
    '',
    text('COMMON.REVISION.STATUS_TYPE.NEW'),
    text('COMMON.REVISION.STATUS_TYPE.PROGRESS'),
    text('COMMON.REVISION.STATUS_TYPE.DONE'),
    text('COMMON.REVISION.STATUS_TYPE.PAY'),
    text('COMMON.REVISION.STATUS_TYPE.PAID'),
  ][status];

  switch (status) {
    case 1:
      return (
        <Typography
          sx={{ px: 8, pb: 4, color: 'red' }}
          variant="listTitle"
          component="div"
        >
          {reviewText}
        </Typography>
      );
    case 2:
      return (
        <Typography
          sx={{ px: 8, pb: 4, color: 'orange' }}
          variant="listTitle"
          component="div"
        >
          {reviewText}
        </Typography>
      );
    case 3:
      return (
        <Typography
          sx={{ px: 8, pb: 4, color: 'green' }}
          variant="listTitle"
          component="div"
        >
          {reviewText}
        </Typography>
      );
    case 4:
      return (
        <Typography
          sx={{ px: 8, pb: 4, color: 'blue' }}
          variant="listTitle"
          component="div"
        >
          {reviewText}
        </Typography>
      );
    case 5:
      return (
        <Typography
          sx={{ px: 8, pb: 4, color: 'blue' }}
          variant="listTitle"
          component="div"
        >
          {reviewText}
        </Typography>
      );
    default:
      return null;
  }
};
