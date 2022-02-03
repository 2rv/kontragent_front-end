import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function LandingProblemsDesktopComponent() {
  return (
    <Grid container spacing={4} minHeight="400px" alignItems="center">
      <BubbleSvg src="/static/img/landing/2-bubble.svg" />

      <Grid item>
        <Typography variant="landingTitle">
          {text('LANDING.PROBLEMS.TITLE')}
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="landingText" sx={{ color: '#707070' }}>
          {text('LANDING.PROBLEMS.DESCRIPTION')}
        </Typography>
      </Grid>

      <Grid item container direction="row">
        <Grid item container spacing={4} alignItems="center" xs>
          <Grid item>
            <Icon src="/static/img/landing/landing-problems/icon-1.svg" />
          </Grid>
          <Grid item>
            <Typography variant="landingText">
              Побуждение откорректировать
              <br /> декларацию и заплатить бюджет?
            </Typography>
          </Grid>
        </Grid>

        <Grid item container spacing={4} alignItems="center" xs>
          <Grid item>
            <Icon src="/static/img/landing/landing-problems/icon-2.svg" />
          </Grid>
          <Grid item>
            <Typography variant="landingText">
              Регулярные вызовы
              <br /> на комиссию КАО ИФНС?
            </Typography>
          </Grid>
        </Grid>

        <Grid item container spacing={4} alignItems="center" xs>
          <Grid item>
            <Icon src="/static/img/landing/landing-problems/icon-3.svg" />
          </Grid>
          <Grid item>
            <Typography variant="landingText">
              Частые запросы со стороны ИФНС
              <br /> вне рамок налоговых проверок?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

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
