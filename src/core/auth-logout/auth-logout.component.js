import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { text } from '../../lib/common/text';

export function AuthLogoutComponent({ onSubmitForm }) {
  return (
    <Box>
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="title" component="div">
              {text('AUTH.LOGOUT.TITLE_TEXT')}
            </Typography>
          </Box>

          <Grid container>
            <Grid xs={4}>
              <Button onClick={onSubmitForm} fullWidth type="sumbit">
                {text('AUTH.LOGOUT.BUTTON_TEXT')}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
