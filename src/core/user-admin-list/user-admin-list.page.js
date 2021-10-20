import React from 'react';
import { UserAdminListContainer } from './user-admin-list.container';
import Grid from '@mui/material/Grid';

export function UserAdminListPage() {
  return (
    <Grid spacing={6} container>
      <UserAdminListContainer />
    </Grid>
  );
}
