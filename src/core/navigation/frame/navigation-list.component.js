import { ListItemButton, ListItemText, ListItem, List } from '@mui/material';
import { redirect } from '../../../main/navigation/navigation.core';

export function NavigationListComponent({ activePath, menuListItems }) {
  return (
    <List disablePadding component="nav">
      {menuListItems.map((item, i) => (
        <ListItem key={i} disablePadding>
          <ListItemButton
            selected={activePath === item.path}
            onClick={() => {
              redirect(item.path);
            }}
            sx={{ pr: 0 }}
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
      ))}
    </List>
  );
}
