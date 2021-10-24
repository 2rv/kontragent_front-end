import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { AuthReferalContainer } from './auth-referal.container';

export function AuthReferalPage() {
  return (
    <Container maxWidth="xs">
      <Grid sx={{ py: 6, minHeight: '100vh' }} container>
        <Grid item>
          <AuthReferalContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
