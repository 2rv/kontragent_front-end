import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';
import { redirect } from '../../main/navigation';

export function LandingStartNowDesktopComponent() {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" justifyContent="center" sx={{ gap: { xs: '12px', lg: '24px' } }} minHeight="400px">
        <Box display="flex" flexDirection="column" gap="24px">
          <Title variant="landingTitle" sx={{ color: '#fff' }}>
            Начните пользоваться платформой
          </Title>
          <Box display="flex" flexDirection="column" gap="24px" maxWidth="600px">
            <SmallText variant="landingText" sx={{ color: '#fff' }}>
              Использование постоянно обновляемых алгоритмов и методических рекомендаций со стороны ФНС РФ, ЦБ РФ и Росфинмониторинга РФ.
            </SmallText>
            <SmallText variant="landingText" sx={{ color: '#fff' }}>
              Более 20-ти источников информации с государственных платформ.
            </SmallText>
            <SmallText variant="landingText" sx={{ color: '#fff' }}>
              Обновляемые базы данных о недобросовестных контрагентах, информацию которую сообщают юзеры в рамках их финансово-хозяйственной деятельности.
            </SmallText>
          </Box>
        </Box>
        <LandingButtonComponent
          tid="Пройти регистрацию"
          onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
          sx={{
            backgroundColor: '#fff',
            color: '#3AB8FF',
            '&:hover': {
              background: '#f3f3f3',
            },
          }}
        />
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #3AB8FF;
  @media (min-width: 1000px) {
    background-image: url("/static/img/landing/landing-start-now/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
