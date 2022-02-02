import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function AdminDashboardFeedbackListStatusComponent(props) {
  const { status } = props;
  const statusText = [
    '',
    text('COMMON.REVISION.STATUS_TYPE.NEW'),
    text('COMMON.REVISION.STATUS_TYPE.PROGRESS'),
    text('COMMON.REVISION.STATUS_TYPE.DONE'),
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
              children={statusText}
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
              children={statusText}
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
              children={statusText}
            />
          }
        />
      );
    default:
      return null;
  }
}
