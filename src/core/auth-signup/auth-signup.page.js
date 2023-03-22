import { AuthSignupContainer } from './auth-signup.container';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export function AuthSignupPage() {
  return (
    <Container maxWidth="xs">
      <Grid sx={{ py: 6, minHeight: '100vh' }} container>
        <Grid item>
          <AuthSignupContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
