import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';

export const ReviewStatus = ({ status }) => {
  const reviewText = [
    '',
    text(
      'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.REVIEW_STATUS.VERIFICATION_REQUEST',
    ),
    text(
      'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.REVIEW_STATUS.APPLICATION_FOR_PROCESSING',
    ),
    text(
      'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.REVIEW_STATUS.REQUEST_COMPLETED',
    ),
    text(
      'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_ITEM.REVIEW_STATUS.ADDITION_PAYMENT_IS_REQUIRED',
    ),
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
    default:
      return null;
  }
};
