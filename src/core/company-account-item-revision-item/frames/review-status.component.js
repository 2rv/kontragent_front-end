import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import { ListItemText } from '@mui/material';

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
        <ListItemText
          primary={
            <span>
              <>
                <Typography
                  sx={{ px: 8, pb: 1 }}
                  variant="listTitle"
                  component="div"
                >
                  {text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
                </Typography>
              </>
            </span>
          }
          secondary={
            <span>
              <>
                <Typography
                  sx={{ px: 8, pb: 4, color: 'red' }}
                  variant="listTitle"
                  component="div"
                >
                  {reviewText}
                </Typography>
              </>
            </span>
          }
        />
      );
    case 2:
      return (
        <ListItemText
          primary={
            <span>
              <>
                <Typography
                  sx={{ px: 8, pb: 1 }}
                  variant="listTitle"
                  component="div"
                >
                  {text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
                </Typography>
              </>
            </span>
          }
          secondary={
            <span>
              <>
                <Typography
                  sx={{ px: 8, pb: 4, color: 'blue' }}
                  variant="listTitle"
                  component="div"
                >
                  {reviewText}
                </Typography>
              </>
            </span>
          }
        />
      );
    case 3:
      return (
        <ListItemText
          primary={
            <span>
              <>
                <Typography
                  sx={{ px: 8, pb: 1 }}
                  variant="listTitle"
                  component="div"
                >
                  {text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
                </Typography>
              </>
            </span>
          }
          secondary={
            <span>
              <>
                <Typography
                  sx={{ px: 8, pb: 4, color: 'green' }}
                  variant="listTitle"
                  component="div"
                >
                  {reviewText}
                </Typography>
              </>
            </span>
          }
        />
      );
    case 4:
      return (
        <ListItemText
          primary={
            <span>
              <>
                <Typography
                  sx={{ px: 8, pb: 1 }}
                  variant="listTitle"
                  component="div"
                >
                  {text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
                </Typography>
              </>
            </span>
          }
          secondary={
            <span>
              <>
                <Typography
                  sx={{ px: 8, pb: 4, color: 'orange' }}
                  variant="listTitle"
                  component="div"
                >
                  {reviewText}
                </Typography>
              </>
            </span>
          }
        />
      );
    case 5:
      return (
        <ListItemText
          primary={
            <span>
              <>
                <Typography
                  sx={{ px: 8, pb: 1 }}
                  variant="listTitle"
                  component="div"
                >
                  {text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
                </Typography>
              </>
            </span>
          }
          secondary={
            <span>
              <>
                <Typography
                  sx={{ px: 8, pb: 4, color: 'green' }}
                  variant="listTitle"
                  component="div"
                >
                  {reviewText}
                </Typography>
              </>
            </span>
          }
        />
      );
    default:
      return null;
  }
};
