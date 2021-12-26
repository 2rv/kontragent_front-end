import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';
import { redirect } from '../../main/navigation';

export function LandingAboutDesktopComponent() {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: { xs: '300px', lg: '350px' },
          gap: { xs: '12px', lg: '24px' },
        }}
      >
        <Title variant="landingTitle">
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
        />
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
  @media (min-width: 1000px) {
    background-image: url("/static/img/landing/landing-about/background.svg");
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
