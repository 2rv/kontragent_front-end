import React from 'react';
import { AccountAddToReferalContainer } from './account-add-to-referal.container';
import { Grid, Container } from '@material-ui/core';

export function AccountAddToReferalPage() {
  return (
    <Container maxWidth="xs">
      <Grid sx={{ py: 6, minHeight: '100vh' }} container>
        <Grid item>
          <AccountAddToReferalContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
