import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { USER_MENU_ITEM, ADMIN_MENU_ITEM } from './navigation-list.constant';
import { NavigationListComponent } from './navigation-list.component';

export function NavigationDesktopMenuComponent(props) {
  const { isAdmin, activePath } = props;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 255,
        '& .MuiDrawer-paper': { width: 255 },
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Grid container spacing={4}>
        <Grid item>
          <img
            style={{ margin: '0 auto', display: 'block' }}
            height="32px"
            src="/static/img/logo.svg"
          />
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        <Grid item>
          <NavigationListComponent
            activePath={activePath}
            menuListItems={isAdmin ? ADMIN_MENU_ITEM : USER_MENU_ITEM}
          />
        </Grid>
      </Grid>
    </Drawer>
  );
}
