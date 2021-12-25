import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';

export function LandingAboutDesktopComponent() {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" gap="20px">
        <Title variant="landingTitleHero">
          Что мы предлагаем?
        </Title>
        <SmallText variant="landingText" sx={{ maxWidth: '700px' }}>
          Платформа для проверки нахождения контрагента (или будущего контрагента) в списке юридических лиц, в отношении которых налоговыми органами передана
          информация в систему ФНС России об отсутствии источника применения правомерной
          налоговой выгоды в виде вычета/возмещения НДС по книгам продаж.
        </SmallText>
        <LandingButtonComponent
          tid="Пройти регистрацию"
          onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
          sx={{ width: '100%', maxWidth: '320px' }}
        />
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
  @media (min-width: 1000px) {
    background-image: url("/static/img/landing/landing-about/background.png");
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
