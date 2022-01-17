import React from 'react';
import Alert from '@mui/material/Alert';
import { text } from '../../lib/common/text';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export function AccountReferalComponent(props) {
  const { handleClickAccept, isPending, isSuccess, isError, errorMessage } =
    props;

  return (
    <Box>
      <Box sx={{ pb: 4 }}>
        <img
          style={{ margin: '0 auto', display: 'block' }}
          height="32px"
          src="/static/img/logo.svg"
        />
      </Box>
      <Paper>
        <Box>
          <Box>
            <Typography
              sx={{
                pb: 2,
                fontSize: '22px',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              {text('ACCOUNT_REFERAL.TITLE')}
            </Typography>

            <Typography
              sx={{
                color: '#707070',
                fontSize: '16px',
                textAlign: 'left',
                pb: 4,
              }}
            >
              {text('ACCOUNT_REFERAL.DESCRIPTION')}
            </Typography>

            <Grid sx={{ p: 0 }} item>
              <Button
                fullWidth
                variant="contained"
                onClick={handleClickAccept}
                disabled={isPending}
              >
                {text('ACCOUNT_REFERAL.BUTTON.TITLE')}
              </Button>
            </Grid>
            {isError && (
              <Box sx={{ pt: 4 }}>
                <Alert sx={{ textAlign: 'left' }} severity="error">
                  {text(`ERROR.${errorMessage}`)}
                </Alert>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
