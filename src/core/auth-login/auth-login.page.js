import { AuthLoginContainer } from './auth-login.container';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export function AuthLoginPage() {
  return (
    <Container maxWidth="xs">
      <Grid sx={{ py: 6, minHeight: '100vh' }} container>
        <Grid item>
          <AuthLoginContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
