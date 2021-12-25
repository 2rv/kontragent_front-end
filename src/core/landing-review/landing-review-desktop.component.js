import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';

export function LandingReviewDesktopComponent() {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" gap="20px">
        <Title variant="landingTitleHero" sx={{ color: '#fff' }}>
          Точность проверки состовляет 97%
        </Title>
        <Box display="flex" flexDirection="column" gap="20px" sx={{ maxWidth: '600px' }}>
          <SmallText variant="landingText" sx={{ color: '#fff' }}>
            Наш сервис базируется на информации из открытых источников и баз данных,
            а также на отзывах и рейтингах бизнес-сообществ, основанных на историях
            реальных бизнес партнеров
          </SmallText>
          <SmallText variant="landingText" sx={{ color: '#fff' }}>
            Каждый участник сообщества публикует информацию о рисках, связанных с работой недобросовесных контрагентов, которая видна всем участникам
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
  @media (min-width: 1000px) {
    background-image: url("/static/img/landing/landing-review/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
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
