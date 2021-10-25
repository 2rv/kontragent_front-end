import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { redirect } from '../../main/navigation/navigation.core';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { text } from '../../lib/common/text';

import { SETTINGS_ROUTE_PATH } from '../settings';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../company-account-list';

const drawerWidth = 240;

export function NavigationComponent(props) {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
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
          <List disablePadding>
            <ListItem
              disablePadding
              sx={{ px: 8, py: 3 }}
              selected={activePath === COMPANY_ACCOUNT_LIST_ROUTE_PATH}
              button
              key={1}
              onClick={() => {
                redirect(COMPANY_ACCOUNT_LIST_ROUTE_PATH);
              }}
            >
              <ListItemText
                disablePadding
                primary={text('NAVIGATION.MY_COMPANIES')}
              />
            </ListItem>
            <ListItem
              disablePadding
              sx={{ px: 8, py: 3 }}
              button
              selected={activePath === SETTINGS_ROUTE_PATH}
              key={2}
              onClick={() => {
                redirect(SETTINGS_ROUTE_PATH);
              }}
            >
              <ListItemText
                disablePadding
                primary={text('NAVIGATION.SETITNGS')}
              />
            </ListItem>
          </List>
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