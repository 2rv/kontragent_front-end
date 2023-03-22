import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AUTH_STORE_NAME } from '../../lib/common/auth';
import { USER_ROLE } from '../../lib/common/auth/auth.constant';
import { FooterContainer } from '../footer/footer.container';
import { NavigationMobileMenuComponent } from './frame/navigation-mobile.component';
import { NavigationDesktopMenuComponent } from './frame/navigation-desktop.component';

export function NavigationComponent(props) {
  const { window } = props;
  const { activePath, user } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
    user: state[AUTH_STORE_NAME].user,
  }));

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <NavigationDesktopMenuComponent
        activePath={activePath}
        isAdmin={user?.role === USER_ROLE.ADMIN}
      />

      <Grid container>
        <Grid item display={{ sm: 'none' }}>
          <NavigationMobileMenuComponent
            container={container}
            activePath={activePath}
            isAdmin={user?.role === USER_ROLE.ADMIN}
          />
        </Grid>

        <Grid item flex={1} component="main" p={8}>
          {props.children}
        </Grid>

        <Grid item sx={{ backgroundColor: '#fff', p: 8 }}>
          <FooterContainer />
        </Grid>
      </Grid>
    </Box>
  );
}
