import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';

export function LandingGetNotificationDesktopComponent() {
  return (
    <Layout>
      <Grid container direction="row" alignItems="center" wrap="wrap" gap="32px">
        <Grid item sx={{ maxWidth: '500px' }} display="flex" flexDirection="column" gap="20px">
          <Title variant="landingTitleHero">
            Узнайте о проблеме первыми
          </Title>
          <SmallText variant="landingText">
            Наша платформа как система раннего предупреждения,
            клиент получает первым сигнал о потенциальных проблемах
            как в своем бизнесе, так и в бизнесе его партнерах,
            в части применения незаконных методов по оптимизации
            налогообложения как в прошлом, так и в режиме онлайн.
          </SmallText>
          <LandingButtonComponent
            tid="Пройти регистрацию"
            onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
            sx={{ width: '100%', maxWidth: '320px' }}
          />
        </Grid>
        <Grid item sx={{ maxWidth: '500px', display: { xs: 'none', lg: 'block' } }}>
          <img src="/static/img/landing/landing-get-notification/info-image.png" />
        </Grid>
      </Grid>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
`;

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
