import { ListItemButton, ListItemText, ListItem, List } from '@mui/material';
import { fontWeight } from '@mui/material/node_modules/@mui/system';

import { redirect } from '../../../main/navigation/navigation.core';

export function NavigationListComponent({ activePath, menuListItems }) {
  return (
    <List disablePadding>
      {menuListItems.map((item, i) => {
        return (
          <ListItem disablePadding key={i}>
            <ListItemButton
              sx={{ px: 8, py: 3 }}
              selected={activePath === Object.keys(item)[0]}
              onClick={() => {
                redirect(Object.keys(item)[0]);
              }}
            >
              <ListItemText
                disablePadding
                primary={item[Object.keys(item)[0]]}
                primaryTypographyProps={
                  activePath === Object.keys(item)[0]
                    ? {
                        fontWeight: '600',
                        color: '#000',
                      }
                    : { color: '#707070' }
                }
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
