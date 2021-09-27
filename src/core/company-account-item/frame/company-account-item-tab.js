import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            {tab.map((tabItem) => (
              <Tab
                key={tabItem.id}
                sx={{ p: 4 }}
                label={tabItem.label}
                {...a11yProps(tabItem.id)}
              />
            ))}
          </Tabs>
        </Paper>
      </Grid>
      <Grid item>
        {tab.map(({ component: Component, ...tabItem }) => (
          <TabPanel key={tabItem.id} value={value} index={tabItem.id}>
            <Component />
          </TabPanel>
        ))}
      </Grid>
    </Grid>
  );
}
