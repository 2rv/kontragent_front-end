import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import { redirect } from '../../../main/navigation/navigation.core';

export function NavigationListComponent({ activePath, menuListItems }) {
  return (
    <List disablePadding component="nav">
      {menuListItems.map((item, i) => (
        <ListItem disableGutters disablePadding key={i}>
          <ListItemButton
            selected={activePath === item.path}
            onClick={() => redirect(item.path)}
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
