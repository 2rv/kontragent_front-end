import { AuthVerificationEmailContainer } from './auth-verification-email.container';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export function AuthVerificationEmailPage() {
  return (
    <Container maxWidth="xs">
      <Grid sx={{ py: 6, minHeight: '100vh' }} container>
        <Grid item>
          <AuthVerificationEmailContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
