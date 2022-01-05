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

export function LandingHeaderMobileComponent({ activePath, headerLinks }) {
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
          alignItems: 'center',
          width: '100%',
          px: '32px',
          py: '20px',
        }}
      >
        <img src="/static/img/landing/mobile-menu.svg" onClick={handleDrawerToggle} />
        <img src="/static/img/landing/header-logo-mobile.svg" style={{ margin: '0 auto', marginTop: '4px' }} />
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
            px: '32px',
            py: '20px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            p: 0,
          }}
        >
          <img src="/static/img/landing/close.svg" onClick={handleDrawerToggle} />
          <img src="/static/img/landing/header-logo-mobile.svg" style={{ margin: '0 auto', marginTop: '4px' }} />
        </Box>
        <Box sx={{ display: 'grid', gap: 2, mt: 5 }}>
          {headerLinks.map((item, index) => (
            <Typography
              key={index}
              onClick={() => scrollWithAnchor(item.path)}
              sx={
                activePath === item.path
                  ? {
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#000',
                    }
                  : {
                      fontSize: '12px',
                      color: '#707070',
                      cursor: 'pointer',
                    }
              }
            >
              {text(item.name)}
            </Typography>
          ))}
          <Button
            variant="black"
            onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
            sx={{ height: '32px', mt: 3, mb: 1 }}
          >
            <Typography variant="landingText" sx={{ fontWeight: '600', fontSize: '12px' }}>
              {text('LANDING.COMMON.SIGNIN')}
            </Typography>
          </Button>
          <LandingButtonComponent
            tid={text('LANDING.COMMON.SIGNUP')}
            onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
            height="32px"
            maxWidth="100%"
          />
        </Box>
      </Drawer>
    </Box>
  );
}
