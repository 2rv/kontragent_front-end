import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import { NAVIGATION_STORE_NAME } from '../navigation/navigation.constant';
import { text } from '../text';
import { redirect } from '../../../main/navigation/navigation.core';

export function TabContainer({ config }) {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(
      config.findIndex((e) => {
        if (e.pathname === activePath) return true;
      }),
    );
  }, []);

  const handleChange = (e, newValue) => {
    redirect(config[newValue].path());
  };

  const handleChangeMobile = (item) => {
    redirect(config[item.id].path());
  };

  return (
    <>
      <Paper
        sx={{
          py: 0,
          px: 6,
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          scrollButtons="auto"
          variant="scrollable"
        >
          {config.map((item) => (
            <Tab
              key={item.id}
              sx={{ p: 4 }}
              label={text(item.label)}
              {...a11yProps(item.id)}
            />
          ))}
        </Tabs>
      </Paper>
      <Paper
        sx={{
          py: 4,
          px: 6,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuList>
          {config.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => handleChangeMobile(item)}
              selected={item.pathname === activePath}
            >
              <ListItemText sx={{ textAlign: 'center' }}>
                {text(item.label)}
              </ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </>
  );
}
