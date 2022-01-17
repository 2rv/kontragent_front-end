import { AuthRecoveryAccountUpdatePasswordContainer } from './auth-recovery-account-update-password.container';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export function AuthRecoveryAccountUpdatePasswordPage() {
  return (
    <Container maxWidth="xs">
      <Grid sx={{ py: 6, minHeight: '100vh' }} container>
        <Grid item>
          <AuthRecoveryAccountUpdatePasswordContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
