import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { text } from '../text';

export function ReviewStatusComponent(props) {
  const { status } = props;
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
            <Typography
              variant="listTitle"
              component="div"
              children={text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
            />
          }
          secondary={
            <Typography
              sx={{ color: 'red' }}
              variant="listTitle"
              component="div"
              children={reviewText}
            />
          }
        />
      );
    case 2:
      return (
        <ListItemText
          primary={
            <Typography
              variant="listTitle"
              component="div"
              children={text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
            />
          }
          secondary={
            <Typography
              sx={{ color: 'blue' }}
              variant="listTitle"
              component="div"
              children={reviewText}
            />
          }
        />
      );
    case 3:
      return (
        <ListItemText
          primary={
            <Typography
              variant="listTitle"
              component="div"
              children={text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
            />
          }
          secondary={
            <Typography
              sx={{ color: 'green' }}
              variant="listTitle"
              component="div"
              children={reviewText}
            />
          }
        />
      );
    case 4:
      return (
        <ListItemText
          primary={
            <Typography
              variant="listTitle"
              component="div"
              children={text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
            />
          }
          secondary={
            <Typography
              sx={{ color: 'orange' }}
              variant="listTitle"
              component="div"
              children={reviewText}
            />
          }
        />
      );
    case 5:
      return (
        <ListItemText
          primary={
            <Typography
              variant="listTitle"
              component="div"
              children={text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
            />
          }
          secondary={
            <Typography
              sx={{ color: 'green' }}
              variant="listTitle"
              component="div"
              children={reviewText}
            />
          }
        />
      );
    default:
      return null;
  }
}
