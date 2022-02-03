import { useState } from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';

import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';

export function LandingHeaderMobileComponent({ headerLinks }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const scrollWithAnchor = (path) => {
    router.push(path, undefined, { shallow: true });
  };

  const handleToggle = () => setOpen(!open);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={8}
    >
      <Grid item sx={{ cursor: 'pointer' }} onClick={handleToggle}>
        <img src="/static/img/landing/mobile-menu.svg" />
      </Grid>

      <Grid item>
        <img src="/static/img/landing/header-logo-mobile.svg" />
      </Grid>

      <div />

      <Drawer
        variant="temporary"
        open={open}
        onClose={handleToggle}
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
            p: 8,
          },
        }}
      >
        <Grid container spacing={4}>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            paddingBottom={2}
          >
            <Grid item sx={{ cursor: 'pointer' }} onClick={handleToggle}>
              <img src="/static/img/landing/close.svg" />
            </Grid>

            <Grid item>
              <img src="/static/img/landing/header-logo-mobile.svg" />
            </Grid>

            <div />
          </Grid>

          <Grid item container spacing={2}>
            {headerLinks.map((item, index) => (
              <Grid item>
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
                  children={text(item.name)}
                />
              </Grid>
            ))}
          </Grid>

          <Grid item>
            <Button
              variant="black"
              onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
              sx={{ width: '50%', height: '36px' }}
              children={text('LANDING.COMMON.SIGNIN')}
            />
          </Grid>

          <Grid item>
            <Button
              onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
              sx={{ width: '50%', height: '36px' }}
              children={text('LANDING.COMMON.SIGNUP')}
            />
          </Grid>
        </Grid>
      </Drawer>
    </Grid>
  );
}
