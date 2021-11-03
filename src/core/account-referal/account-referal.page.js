import React from 'react';
import { AccountReferalContainer } from './account-referal.container';
import { Grid, Container } from '@material-ui/core';

export function AccountReferalPage() {
  return (
    <Container maxWidth="xs">
      <Grid
        sx={{
          py: 6,
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        container
      >
        <Grid item>
          <AccountReferalContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
