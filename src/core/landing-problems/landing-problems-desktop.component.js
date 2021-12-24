import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing';

export function LandingProblemsDesktopComponent() {
  return (
    <Layout>
      <Grid container gap="32px">
        <Grid item display="flex" flexDirection="column" textAlign="center">
          <Title variant="landingTitleHero">
            Сталкиваетесь с этими проблемами?
          </Title>
          <SmallText variant="landingText">
            Мы раскроем вам правду и предложим решение!
          </SmallText>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="center" textAlign="center" gap="20px">
            <Grid item maxWidth="345px" display="flex" flexDirection="column" alignItems="center">
              <Icon src="/static/img/landing/landing-principles/icon-1.svg" />
              <SmallText variant="landingText">Побуждение откорректировать декларацию и заплатить бюджет?</SmallText>
            </Grid>
            <Grid item maxWidth="345px" display="flex" flexDirection="column" alignItems="center">
              <Icon src="/static/img/landing/landing-principles/icon-2.svg" />
              <SmallText variant="landingText">Регулярные вызовы на комиссию КАО ИФНС?</SmallText>
            </Grid>
            <Grid item maxWidth="345px" display="flex" flexDirection="column" alignItems="center">
              <Icon src="/static/img/landing/landing-principles/icon-3.svg" />
              <SmallText variant="landingText">Частые запросы со стороны ИФНС вне рамок налоговых проверок?</SmallText>
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
