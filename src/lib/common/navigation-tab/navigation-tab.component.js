import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { NAVIGATION_STORE_NAME } from '../../../lib/common/navigation/navigation.constant';
import { text } from '../../../lib/common/text';
import { redirect } from '../../../main/navigation/navigation.core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

export function CompanyAccountItemTabComponent({ tab }) {
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
    setValue(activePath);
  }, [activePath]);

  const handleChange = (e, newValue) => {
    redirect(newValue);
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
            {tab
              ? tab.map((tabItem) => (
                  <Tab
                    value={tabItem.path}
                    key={tabItem.id}
                    sx={{ p: 4 }}
                    label={text(tabItem.label)}
                    {...a11yProps(tabItem.id)}
                  />
                ))
              : null}
          </Tabs>
        </Paper>
      </Grid>
      {/* <Grid item>
        {tab.map(({ component: Component, ...tabItem }) => (
          <TabPanel key={tabItem.id} value={value} index={tabItem.id}>
            <Component />
          </TabPanel>
        ))}
      </Grid> */}
    </Grid>
  );
}
