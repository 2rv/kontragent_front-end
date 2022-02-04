import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import { LandingButtonComponent } from '../../lib/common/landing';
import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';

import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';

export function LandingHeaderDesktopComponent({ headerLinks }) {
  const router = useRouter();

  const scrollWithAnchor = (path) => {
    router.push(path, undefined, { shallow: true });
  };

  return (
    <AppBar position="static" sx={{ px: 8, py: 0, backgroundColor: '#F3F3F3' }}>
      <Toolbar disableGutters>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: 80 }}
          wrap="nowrap"
        >
          <Grid item xs="auto">
            <img height="24px" src="/static/img/logo.svg" />
          </Grid>

          <Grid
            item
            container
            spacing={6}
            direction="row"
            justifyContent="start"
            alignItems="center"
            xs="auto"
          >
            {headerLinks.map((item, index) => (
              <Grid item key={index}>
                <Typography
                  variant="title"
                  onClick={() => scrollWithAnchor(item.path)}
                  sx={{
                    fontWeight: router.asPath === item.path ? 600 : 400,
                    color: router.asPath === item.path ? '#000' : '#707070',
                    cursor: 'pointer',
                  }}
                  children={text(item.name)}
                />
              </Grid>
            ))}
          </Grid>

          <Grid
            item
            container
            spacing={4}
            direction="row"
            justifyContent="start"
            alignItems="center"
            xs="auto"
          >
            <Grid item xs="auto">
              <Typography
                sx={{ fontWeight: '600', color: '#000', cursor: 'pointer' }}
                onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
                children={text('LANDING.COMMON.SIGNIN')}
              />
            </Grid>

            <Grid item xs="auto">
              <LandingButtonComponent
                tid={text('LANDING.COMMON.SIGNUP')}
                onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
                height="46px"
                boxShadow="inherit"
              />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
