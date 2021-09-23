import { AuthRecoveryAccountContainer } from './auth-recovery-account.container';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export function AuthRecoveryAccountPage() {
  return (
    <Container maxWidth="xs">
      <Grid sx={{ py: 6, minHeight: '100vh' }} container>
        <Grid item>
          <AuthRecoveryAccountContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
