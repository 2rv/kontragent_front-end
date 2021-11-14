import React from 'react';
import {
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Alert,
  LinearProgress,
} from '@mui/material';
import { text } from '../../lib/common/text';
import { TextFieldElement } from '../../lib/element/text-field.element';

export function UserAdminInviteComponent({
  handleChange,
  value,
  isRequestError,
  errorMessage,
  isRequestPending,
  isRequestSuccess,
  onClick,
}) {
  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>{text('USER_ADMIN_INVITE.TITLE')}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextFieldElement
            label={text('USER_ADMIN_INVITE.INPUT.TITLE')}
            name={'emails'}
            onChange={handleChange}
            value={value}
            error={isRequestError}
            fullWidth
            errorText={errorMessage}
          ></TextFieldElement>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={onClick}>
            {text('USER_ADMIN_INVITE.BUTTON.TITLE')}
          </Button>
        </Grid>
      </Grid>
      {isRequestError && (
        <Box sx={{ pt: 4 }}>
          <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
        </Box>
      )}
      {isRequestSuccess && (
        <Box sx={{ pt: 4 }}>
          <Alert severity="success">
            {text('USER_ADMIN_INVITE.INPUT.SUCCESS')}
          </Alert>
        </Box>
      )}
      {isRequestPending && (
        <Box sx={{ pt: 4, width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </Paper>
  );
}
