import { InviteContainer } from './invite.container';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export function InvitePage() {
  return (
    <Container maxWidth="xs">
      <Grid sx={{ py: 6, minHeight: '100vh' }} container>
        <Grid item>
          <InviteContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
