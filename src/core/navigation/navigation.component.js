import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AUTH_STORE_NAME } from '../../lib/common/auth';

import { NavigationListComponent } from './frame/navigation-list.component';
import { USER_ROLE } from '../../lib/common/auth/auth.constant';
import {
  USER_MENU_ITEM,
  ADMIN_MENU_ITEM,
} from './frame/navigation-list.constant';
const drawerWidth = 240;

export function NavigationComponent(props) {
  const { activePath, user } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
    user: state[AUTH_STORE_NAME].user,
  }));

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          p: 4,
          backgroundColor: '#fff',
          display: { sm: 'none' },
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <img
              style={{ display: 'block' }}
              height="24px"
              src="/static/img/menuIcon.svg"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              padding: 0,
            },
          }}
        >
          <Box sx={{ pt: 8, pb: 4 }}>
            <Grid
              spacing={3}
              container
              display="flex"
              direction="row"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
            >
              <Grid sx={{ ml: 3, mr: -3 }} xs={3} item>
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <img
                    style={{ display: 'block' }}
                    height="24px"
                    src="/static/img/cross.svg"
                  />
                </IconButton>
              </Grid>
              <Grid xs={8} item>
                <img
                  style={{ display: 'block' }}
                  height="22px"
                  src="/static/img/logo.svg"
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ px: 8 }}>
            <Divider />
          </Box>
          <Box sx={{ overflow: 'auto', pt: 2 }}>
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
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              padding: 0,
            },
          }}
          open
        >
          <Box sx={{ pt: 8, px: 8, pb: 4 }}>
            <img
              style={{ margin: '0 auto', display: 'block' }}
              height="32px"
              src="/static/img/logo.svg"
            />
          </Box>
          <Box sx={{ px: 8 }}>
            <Divider />
          </Box>
          <Box sx={{ overflow: 'auto', pt: 2 }}>
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
          </Box>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 4, sm: 8 },
          pt: { xs: '105px', sm: 8 },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
