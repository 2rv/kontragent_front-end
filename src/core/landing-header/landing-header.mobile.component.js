import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { redirect } from '../../main/navigation';

import { LandingButtonComponent } from '../../lib/common/landing/landing-button.component';

export function LandingHeaderMobileComponent({ activePath, headerLinks }) {
  const [mobileDrawerVisibility, setMobileDrawerVisibility] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileDrawerVisibility(!mobileDrawerVisibility);
  };

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <Box sx={{ display: 'flex', p: 3, width: '100%' }}>
        <img height="22px" src="/static/img/menuIcon.svg" onClick={handleDrawerToggle} />
        <img height="22px" src="/static/img/logo.svg" style={{ margin: '0 auto' }} />
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
            padding: '20px',
            height: '100%',
          },
        }}
      >
        <Box sx={{ display: 'flex', p: 0, width: '100%' }}>
          <img height="22px" src="/static/img/cross.svg" onClick={handleDrawerToggle} />
          <img height="22px" src="/static/img/logo.svg" style={{ margin: '0 auto' }} />
        </Box>
        <Box sx={{ overflow: 'auto', pt: 2, display: 'grid', gap: '10px', mt: 5 }}>
          {headerLinks.map((item, i) => (
            <Box item key={i}>
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
            </Box>
          ))}
          <Button variant="black" onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)} sx={{ mt: 3 }}>
            Вход
          </Button>
          <LandingButtonComponent
            tid="Регистрация"
            onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
          />
        </Box>
      </Drawer>
    </Box>
  );
}

const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
`;
