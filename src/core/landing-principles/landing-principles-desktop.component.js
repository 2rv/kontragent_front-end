import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing';

export function LandingPrinciplesDesktopComponent() {
  return (
    <Layout>
      <Grid container gap="32px">
        <Grid item display="flex" flexDirection="column" textAlign="center" gap="20px">
          <Title variant="landingTitleHero">
            Платформа придерживается некоторым принципам
          </Title>
          <SmallText variant="landingText">
            Вот 3 основных из них:
          </SmallText>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="center" textAlign="center" gap="20px">
            <Grid item maxWidth="345px" display="flex" flexDirection="column" alignItems="center">
              <Icon src="/static/img/landing/landing-principles/icon-1.svg" />
              <SmallText variant="landingText">Мы приносим пользу и ценность предпринимателям</SmallText>
            </Grid>
            <Grid item maxWidth="345px" display="flex" flexDirection="column" alignItems="center">
              <Icon src="/static/img/landing/landing-principles/icon-2.svg" />
              <SmallText variant="landingText">Мы ценим наших клиентов и дорожим их доверием</SmallText>
            </Grid>
            <Grid item maxWidth="345px" display="flex" flexDirection="column" alignItems="center">
              <Icon src="/static/img/landing/landing-principles/icon-3.svg" />
              <SmallText variant="landingText">Мы гарантируем качество и ответственность результата</SmallText>
            </Grid>
          </Grid>
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

const Icon = styled.img`
  width: 50px;
  height: 50px;
  @media (min-width: 0px) and (max-width: 599px) {
    width: 20px;
    height: 20px;
  }
`;
