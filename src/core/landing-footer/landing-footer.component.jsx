import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';
import { redirect } from '../../main/navigation';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';

export function LandingFooterComponent() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={8}
    >
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          xs="auto"
          rowSpacing={3}
          columnSpacing={{
            xs: 8,
            sm: 16,
          }}
        >
          <Grid item>
            <Grid container rowSpacing={3}>
              <Grid item>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    fontWeight: 600,
                    color: '#252525',
                    fontSize: {
                      xs: '12px',
                      sm: 'body1.fontSize',
                    },
                  }}
                  children={text('LANDING.FOOTER.HOME')}
                />
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    fontSize: {
                      xs: '12px',
                      sm: 'body1.fontSize',
                    },
                  }}
                  onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
                  children={text('LANDING.FOOTER.SIGNUP')}
                />
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    fontSize: {
                      xs: '12px',
                      sm: 'body1.fontSize',
                    },
                  }}
                  onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
                  children={text('LANDING.FOOTER.AUTHORIZATION')}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container rowSpacing={3}>
              <Grid item>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    fontSize: {
                      xs: '12px',
                      sm: 'body1.fontSize',
                    },
                  }}
                  onClick={() =>
                    redirect(
                      'https://xn--80aggrpdcrrf.xn--p1ai/static/pdf/terms-of-the-offer.pdf',
                      { newTab: true },
                    )
                  }
                  children={text('LANDING.FOOTER.PRIVACY_POLICITY')}
                />
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    fontSize: {
                      xs: '12px',
                      sm: 'body1.fontSize',
                    },
                  }}
                  onClick={() =>
                    redirect(
                      'https://xn--80aggrpdcrrf.xn--p1ai/static/pdf/user-agreement.pdf',
                      { newTab: true },
                    )
                  }
                  children={text('LANDING.FOOTER.PRIVACY_USER_TERMS')}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        justifyContent="flex-start"
        alignItems={{
          xs: 'flex-start',
          md: 'flex-end',
        }}
        spacing={4}
        xs="auto"
      >
        <Grid item>
          <Box
            sx={{
              height: {
                xs: 20,
                sm: 26,
              },
            }}
          >
            <img height="100%" src="/static/img/logo.svg" />
          </Box>
        </Grid>

        <Grid item>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: '12px',
                sm: 'body1.fontSize',
              },
            }}
            children={'© 2021 Контрагент. Все права защищены.'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
