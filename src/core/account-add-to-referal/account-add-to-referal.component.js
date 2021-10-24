import React from 'react';
import { Paper, Box, Typography, Button } from '@material-ui/core';
import { text } from '../../lib/common/text';

export function AccountAddToReferalComponent(props) {
  const {
    handleClickAccept,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    pageLoading,
  } = props;

  return (
    <Paper sx={{ textAlign: 'center' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="title" component="div">
          {text('ACCOUNT_ADD_TO_REFERAL.TITLE')}
        </Typography>
      </Box>
      <Box sx={{ pb: 4, pt: 2 }}>
        <Button
          variant="contained"
          onClick={handleClickAccept}
          disabled={isPending}
        >
          {text('ACCOUNT_ADD_TO_REFERAL.BUTTON.TITLE')}
        </Button>
        {isError && (
          <Typography xs={{ color: 'red' }} variant="title" component="div">
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}
