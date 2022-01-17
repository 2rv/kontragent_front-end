import { useRouter } from 'next/router';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { redirect } from '../../main/navigation';

import { LandingButtonComponent } from '../../lib/common/landing';
import { text } from '../../lib/common/text';

export function LandingHeaderDesktopComponent({ headerLinks }) {
  const router = useRouter();

  const scrollWithAnchor = (path) => {
    router.push(path, undefined, { shallow: true });
  };

  return (
    <AppBar position="static" sx={{ p: 0, backgroundColor: '#F3F3F3' }}>
      <ToolbarCase disableGutters sx={{ px: 8 }}>
        <img height="24px" src="/static/img/logo.svg" />
        <LinkItems>
          {headerLinks.map((item, index) => (
            <Typography
              key={index}
              onClick={() => scrollWithAnchor(item.path)}
              sx={
                router.asPath === item.path
                  ? {
                      fontWeight: '600',
                      color: '#000',
                    }
                  : { color: '#707070', cursor: 'pointer' }
              }
            >
              {text(item.name)}
            </Typography>
          ))}
        </LinkItems>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Typography
            sx={{ fontWeight: '600', color: '#000', cursor: 'pointer' }}
            onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
          >
            {text('LANDING.COMMON.SIGNIN')}
          </Typography>
          <LandingButtonComponent
            tid={text('LANDING.COMMON.SIGNUP')}
            onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
            height="46px"
            boxShadow="inherit"
          />
        </Box>
      </ToolbarCase>
    </AppBar>
  );
}

const ToolbarCase = styled(Toolbar)`
  display: grid;
  grid-template-columns: 0.7fr 2fr 0.4fr;
  @media (min-width: 1601px) {
    display: flex;
    justify-content: space-between;
  }
`;

const LinkItems = styled(Box)`
  display: flex;
  gap: 20px;
  @media (min-width: 1601px) {
    width: 100%;
    max-width: 1030px;
  }
`;
