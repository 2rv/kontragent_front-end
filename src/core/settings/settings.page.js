import { AuthLoginContainer } from '../auth-login/auth-login.container';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export function SettingsPage1() {
  return (
    <Container maxWidth="xs">
      <Grid sx={{ py: 6, minHeight: '100vh' }} container>
        <Grid item>
          <AuthLoginContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function ClippedDrawer() {
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
        <Box sx={{ p: 8 }}>
          <img
            style={{ margin: '0 auto', display: 'block' }}
            height="32px"
            src="/static/img/logo.svg"
          />
        </Box>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem sx={{ px: 8 }} selected button key={1}>
              <ListItemText primary="Мои компании" />
            </ListItem>
            <ListItem sx={{ px: 8 }} button key={1}>
              <ListItemText primary="Настройки" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Grid container>
          <Grid item>
            <AuthLoginContainer />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export const SettingsPage = ClippedDrawer;
