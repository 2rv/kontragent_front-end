import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { text } from '../../lib/common/text';

export function AuthLogoutComponent({ onSubmitForm, pageLoading }) {
  return (
    <Paper>
      <Box>
        <Box sx={{ pb: 4 }}>
          <Typography variant="title" component="div">
            {text('AUTH.LOGOUT.TITLE_TEXT')}
          </Typography>
        </Box>

        <Grid container direction="row" justifyContent="flex-start">
          <Grid xs={12} lg={4} item>
            <Button
              onClick={onSubmitForm}
              disabled={pageLoading}
              fullWidth
              type="sumbit"
              variant="black"
              sx={{
                "&:disabled": {
                  backgroundColor: 'rgba(0, 0, 0, 0.12)',
                },
              }}
            >
              {text('AUTH.LOGOUT.BUTTON_TEXT')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
