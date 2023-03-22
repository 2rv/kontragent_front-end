import { AuthVerificationPhoneContainer } from './auth-verification-phone.container';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export function AuthVerificationPhonePage() {
  return (
    <Container maxWidth="xs">
      <Grid sx={{ py: 6, minHeight: '100vh' }} container>
        <Grid item>
          <AuthVerificationPhoneContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
