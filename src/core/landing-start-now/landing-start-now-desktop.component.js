import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';

export function LandingStartNowDesktopComponent() {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" gap="20px">
        <Title variant="landingTitleHero" sx={{ color: '#fff' }}>
          Начните пользоваться платформой
        </Title>
        <Box display="flex" flexDirection="column" gap="32px" sx={{ maxWidth: '700px' }}>
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
        <LandingButtonComponent
          tid="Пройти регистрацию"
          onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
          sx={{
            width: '100%',
            maxWidth: '320px',
            backgroundColor: '#fff',
            color: '#3AB8FF',
            '&:hover': {
              background: '#f3f3f3'
            }
          }}
        />
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #3AB8FF;
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
