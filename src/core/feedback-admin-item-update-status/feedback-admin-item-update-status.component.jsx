import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { text } from '../../lib/common/text';
import { FEEDBACK_STATUS } from './feedback-admin-item-update-status.constant';

export function FeedbackAdminItemUpdateStatusComponent(props) {
  const { status, onChange, isPending, isError, isSuccess, errorMessage } =
    props;
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="fieldLabel" children={text('Статус жалобы')} />
      </Grid>
      <Grid item>
        <Select
          value={status}
          onChange={onChange}
          disabled={isPending}
          error={errorMessage}
        >
          {Object.keys(FEEDBACK_STATUS).map((item, key) => (
            <MenuItem
              key={key}
              value={FEEDBACK_STATUS[item]}
              children={text(item)}
            />
          ))}
        </Select>
      </Grid>
    </Grid>
  );
}
