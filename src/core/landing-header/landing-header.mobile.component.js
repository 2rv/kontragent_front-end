import React from 'react';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { redirect } from '../../main/navigation';

import { LandingButtonComponent } from '../../lib/common/landing/landing-button.component';
import { text } from '../../lib/common/text';

export function LandingHeaderMobileComponent({ headerLinks }) {
  const router = useRouter();
  const [mobileDrawerVisibility, setMobileDrawerVisibility] = React.useState(false);

  const scrollWithAnchor = (path) => {
    router.push(path, undefined, { shallow: true });
  };

  const handleDrawerToggle = () => {
    setMobileDrawerVisibility(!mobileDrawerVisibility);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          px: 5,
          py: 5,
        }}
      >
        <img src="/static/img/landing/mobile-menu.svg" onClick={handleDrawerToggle} />
        <img src="/static/img/landing/header-logo-mobile.svg" style={{ marginRight: '12px', marginTop: '2px' }} />
        <div></div>
      </Box>
      <Drawer
        variant="temporary"
        open={mobileDrawerVisibility}
        onClose={handleDrawerToggle}
        anchor="top"
        hideBackdrop
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            background: '#F3F3F3',
            boxSizing: 'border-box',
            height: '100%',
            px: 5,
            py: 5,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            p: 0,
          }}
        >
          <img src="/static/img/landing/close.svg" onClick={handleDrawerToggle} />
          <img src="/static/img/landing/header-logo-mobile.svg" style={{ marginRight: '12px', marginTop: '2px' }} />
          <div></div>
        </Box>
        <Box sx={{ display: 'grid', gap: 2, mt: 5 }}>
          <Box sx={{ display: 'grid', gap: 2 }}>
            {headerLinks.map((item, index) => (
              <Typography
                key={index}
                onClick={() => scrollWithAnchor(item.path)}
                sx={
                  router.asPath === item.path
                    ? {
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#000',
                      }
                    : {
                        fontSize: '16px',
                        color: '#707070',
                        cursor: 'pointer',
                      }
                }
              >
                {text(item.name)}
              </Typography>
            ))}
          </Box>
          <Button
            variant="black"
            onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
            sx={{ height: '36px', mt: 3, mb: 0.5 }}
          >
            <Typography variant="landingText" sx={{ fontWeight: '600', fontSize: '12px' }}>
              {text('LANDING.COMMON.SIGNIN')}
            </Typography>
          </Button>
          <LandingButtonComponent
            tid={text('LANDING.COMMON.SIGNUP')}
            onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
            height="36px"
            maxWidth="100%"
            boxShadow="inherit"
          />
        </Box>
      </Drawer>
    </Box>
  );
}
