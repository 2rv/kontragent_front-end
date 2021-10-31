import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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

  return (
    <Grid spacing={6} container>
      <Grid item>
        <Paper sx={{ py: 0, px: 6 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
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
      </Grid>
    </Grid>
  );
}
