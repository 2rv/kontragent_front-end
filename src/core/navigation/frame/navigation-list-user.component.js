import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { redirect } from '../../../main/navigation/navigation.core';
import { text } from '../../../lib/common/text';

import { SETTINGS_ROUTE_PATH } from '../../settings';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../../company-account-list';
import { USER_REFERAL_BALANCE_ROUTE_PATH } from '../../user-referal-balance';
import { USER_REFERAL_SYSTEM_ROUTE_PATH } from '../../user-referal-system';

export function NavigationListUser({ activePath }) {
  const userMenuItems = [
    { [COMPANY_ACCOUNT_LIST_ROUTE_PATH]: text('NAVIGATION.USER.MY_COMPANIES') },
    {
      [USER_REFERAL_BALANCE_ROUTE_PATH]: text('NAVIGATION.USER.BALANCE'),
    },
    {
      [USER_REFERAL_SYSTEM_ROUTE_PATH]: text('NAVIGATION.USER.SYSTEM'),
    },
    { [SETTINGS_ROUTE_PATH]: text('NAVIGATION.USER.SETITNGS') },
  ];

  return (
    <List disablePadding>
      {userMenuItems.map((item, i) => {
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
