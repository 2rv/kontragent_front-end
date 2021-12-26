import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing';
import { LandingProblemsMobileComponent } from './landing-problems-mobile.component';

export function LandingProblemsDesktopComponent() {
  return (
    <Layout>
      <BubbleSvg src="/static/img/landing/2-bubble.svg" />
      <Grid container gap="32px" minHeight="300px" sx={{ display: { xs: 'none', lg: 'flex' } }}>
        <Grid item display="flex" flexDirection="column" textAlign="center" gap="24px">
          <Title variant="landingTitle">
            Сталкиваетесь с этими проблемами?
          </Title>
          <SmallText variant="landingText">
            Мы раскроем вам правду и предложим решение!
          </SmallText>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="center" textAlign="center" gap="24px">
            <Grid item maxWidth="340px" display="flex" flexDirection="column" alignItems="center">
              <Icon src="/static/img/landing/landing-problems/icon-1.svg" />
              <SmallText variant="landingText">Побуждение откорректировать декларацию и заплатить бюджет?</SmallText>
            </Grid>
            <Grid item maxWidth="340px" display="flex" flexDirection="column" alignItems="center">
              <Icon src="/static/img/landing/landing-problems/icon-2.svg" />
              <SmallText variant="landingText">Регулярные вызовы на комиссию КАО ИФНС?</SmallText>
            </Grid>
            <Grid item maxWidth="340px" display="flex" flexDirection="column" alignItems="center">
              <Icon src="/static/img/landing/landing-problems/icon-3.svg" />
              <SmallText variant="landingText">Частые запросы со стороны ИФНС вне рамок налоговых проверок?</SmallText>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <LandingProblemsMobileComponent />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
  position: relative;
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

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const BubbleSvg = styled.img`
  position: absolute;
  top: 50%;
  right: 3%;
  @media (max-width: 1366px) {
    display: none;
  }
`;
