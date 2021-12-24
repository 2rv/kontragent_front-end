import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { redirect } from '../../main/navigation';

import { LandingButtonComponent } from '../../lib/common/landing';
import { LandingHeaderMobileComponent } from './landing-header.mobile.component';

export function LandingHeaderDesktopComponent({ activePath, headerLinks }) {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#F3F3F3', p: 0, display: { xs: 'none', md: 'flex' } }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton>
            <img height="22px" src="/static/img/logo.svg" />
          </IconButton>
          <Box sx={{ display: 'flex', gap: 4 }}>
            {headerLinks.map((item, i) => (
              <Typography
                key={i}
                sx={
                  activePath === item.path
                    ? {
                        fontWeight: '600',
                        color: '#000',
                      }
                    : { color: '#707070', cursor: 'pointer' }
                }
              >
                {item.name}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Typography
              sx={{ fontWeight: '600', color: '#000', cursor: 'pointer' }}
              onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
            >
              Вход
            </Typography>
            <LandingButtonComponent
              tid="Регистрация"
              onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <LandingHeaderMobileComponent activePath={activePath} headerLinks={headerLinks} />
    </>
  );
}
