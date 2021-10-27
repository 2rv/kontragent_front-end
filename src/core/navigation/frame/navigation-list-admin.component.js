import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { redirect } from '../../../main/navigation/navigation.core';
import { text } from '../../../lib/common/text';

import { SETTINGS_ROUTE_PATH } from '../../settings';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../../company-account-list';
import { REVISION_ADMIN_LIST_ROUTE_PATH } from '../../revision-admin-list';
import { USER_ADMIN_LIST_ROUTE_PATH } from '../../user-admin-list';

export function NavigationListAdmin({ activePath }) {
  const adminMenuItems = [
    {
      [COMPANY_ACCOUNT_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.MY_COMPANIES'),
    },
    {
      [REVISION_ADMIN_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.REVISION'),
    },
    {
      [USER_ADMIN_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.MEMBERS'),
    },
    { [SETTINGS_ROUTE_PATH]: text('NAVIGATION.ADMIN.SETITNGS') },
  ];

  return (
    <List disablePadding>
      {adminMenuItems.map((item, i) => {
        return (
          <ListItem
            disablePadding
            sx={{ px: 8, py: 3 }}
            selected={activePath === Object.keys(item)[0]}
            button
            key={i}
            onClick={() => {
              redirect(Object.keys(item)[0]);
            }}
          >
            <ListItemText disablePadding primary={item[Object.keys(item)[0]]} />
          </ListItem>
        );
      })}
    </List>
  );
}
