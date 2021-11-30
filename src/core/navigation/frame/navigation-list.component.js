import { ListItemButton, ListItemText, ListItem, List } from '@mui/material';
import { fontWeight } from '@mui/material/node_modules/@mui/system';

import { redirect } from '../../../main/navigation/navigation.core';

export function NavigationListComponent({ activePath, menuListItems }) {
  return (
    <List disablePadding>
      {menuListItems.map((item, i) => {
        return (
          <ListItem key={i}>
            <ListItemButton
              sx={{ px: 8, py: 3 }}
              selected={activePath === item.path}
              onClick={() => {
                redirect(item.path);
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={
                  activePath === item.path
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
