import { Paper, Divider, Typography, Grid, Alert } from '@mui/material';
import { text } from '../../lib/common/text';

export function AdminDashboardComponent(props) {
  return (
    <Paper>
      <Grid container spacing={4}>
        <Grid item>
          <Typography variant="title" children={text('Панель админа')} />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>
      </Grid>
    </Paper>
  );
}
