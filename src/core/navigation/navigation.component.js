import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

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
  const { activePath, userRole } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
    userRole: state[AUTH_STORE_NAME].user.role,
  }));

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            padding: 0,
          },
        }}
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
              userRole === USER_ROLE.USER ? USER_MENU_ITEM : ADMIN_MENU_ITEM
            }
          />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 8,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
