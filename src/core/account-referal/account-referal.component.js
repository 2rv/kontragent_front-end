import React from 'react';
import { Paper, Box, Typography, Button, Grid } from '@material-ui/core';
import { text } from '../../lib/common/text';

export function AccountReferalComponent(props) {
  const { handleClickAccept, isPending, isSuccess, isError, errorMessage } =
    props;

  return (
    <Box sx={{ py: 4, px: 4 }}>
      <Box sx={{ pb: 4 }}>
        <img
          style={{ margin: '0 auto', display: 'block' }}
          height="32px"
          src="/static/img/logo.svg"
        />
      </Box>
      <Paper sx={{ textAlign: 'center' }}>
        <Box>
          <Box sx={{ p: 6 }}>
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
              <Typography xs={{ color: 'red' }} variant="title" component="div">
                {errorMessage}
              </Typography>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
