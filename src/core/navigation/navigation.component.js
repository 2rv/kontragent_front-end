import { useState } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AUTH_STORE_NAME } from '../../lib/common/auth';
import { USER_ROLE } from '../../lib/common/auth/auth.constant';
import { FooterContainer } from '../footer/footer.container';

import {
  USER_MENU_ITEM,
  ADMIN_MENU_ITEM,
} from './frame/navigation-list.constant';
import { NavigationListComponent } from './frame/navigation-list.component';

export function NavigationComponent(props) {
  const { window } = props;
  const { activePath, user } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
    user: state[AUTH_STORE_NAME].user,
  }));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Grid
        container
        direction="row"
        alignItems="stretch"
        justifyContent="stretch"
        flex={1}
        wrap="nowrap"
      >
        <Grid
          xs="auto"
          item
          container
          display={{ xs: 'none', sm: 'block', backgroundColor: '#fff' }}
          spacing={4}
          py={8}
          px={4}
        >
          <Grid item>
            <img
              style={{ margin: '0 auto', display: 'block' }}
              height="32px"
              src="/static/img/logo.svg"
            />
          </Grid>

          <Grid item>
            <Divider />
          </Grid>

          <Grid item>
            <NavigationListComponent
              activePath={activePath}
              menuListItems={
                user
                  ? user.role === USER_ROLE.USER
                    ? USER_MENU_ITEM
                    : ADMIN_MENU_ITEM
                  : []
              }
            />
          </Grid>
        </Grid>

        <Grid xs item container>
          <Grid item display={{ sm: 'none' }}>
            <AppBar position="static" sx={{ p: 4, backgroundColor: '#fff' }}>
              <Toolbar sx={{ justifyContent: 'space-between' }}>
                <IconButton onClick={handleDrawerToggle}>
                  <img
                    style={{ display: 'block' }}
                    height="24px"
                    src="/static/img/menuIcon.svg"
                  />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid item flex={1} component="main" p={8}>
            {props.children}
          </Grid>

          <Grid item sx={{ backgroundColor: '#fff', p: 8 }}>
            <FooterContainer />
          </Grid>
        </Grid>

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            spacing={4}
          >
            <Grid
              item
              container
              direction="row"
              justifyContent="space-beetwen"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs="auto">
                <IconButton sx={{ p: 0 }} onClick={handleDrawerToggle}>
                  <img
                    style={{ display: 'block' }}
                    height="24px"
                    src="/static/img/cross.svg"
                  />
                </IconButton>
              </Grid>

              <Grid item xs>
                <img
                  style={{ display: 'block' }}
                  height="22px"
                  src="/static/img/logo.svg"
                />
              </Grid>
            </Grid>

            <Grid item>
              <Divider />
            </Grid>

            <Grid item>
              <NavigationListComponent
                activePath={activePath}
                menuListItems={
                  user
                    ? user.role === USER_ROLE.USER
                      ? USER_MENU_ITEM
                      : ADMIN_MENU_ITEM
                    : USER_MENU_ITEM
                }
              />
            </Grid>
          </Grid>
        </Drawer>
      </Grid>
    </Box>
  );
}
