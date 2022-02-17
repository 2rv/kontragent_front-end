import { useState, Fragment } from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

import { USER_MENU_ITEM, ADMIN_MENU_ITEM } from './navigation-list.constant';
import { NavigationListComponent } from './navigation-list.component';

export function NavigationMobileMenuComponent(props) {
  const { container, activePath, isAdmin } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Fragment>
      <AppBar
        position="static"
        sx={{
          p: 4,
          backgroundColor: '#fff',
          backgroundColor: 'white',
          boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 10px',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton onClick={toggleMenu}>
            <img
              style={{ display: 'block' }}
              height="24px"
              src="/static/img/menuIcon.svg"
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        sx={{
          width: 255,
          '& .MuiDrawer-paper': { width: 255 },
          display: { xs: 'block', sm: 'none' },
        }}
        container={container}
        open={mobileOpen}
        onClose={toggleMenu}
        ModalProps={{ keepMounted: true }}
      >
        <Grid container spacing={4}>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-beetwen"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs="auto">
              <IconButton sx={{ p: 0 }} onClick={toggleMenu}>
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
              menuListItems={isAdmin ? ADMIN_MENU_ITEM : USER_MENU_ITEM}
            />
          </Grid>
        </Grid>
      </Drawer>
    </Fragment>
  );
}

// const [mobileOpen, setMobileOpen] = useState(false);
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
{
  /* <AppBar position="static" sx={{ p: 4, backgroundColor: '#fff' }}>
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
<Drawer
        variant="temporary"
        sx={{
          width: 250,
          '& .MuiDrawer-paper': { width: 250 },
          display: { xs: 'block', sm: 'none' },
        }}
        container={container}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <Grid container spacing={4}>
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
      </Drawer> */
}
