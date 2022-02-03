import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function LandingPrinciplesDesktopComponent() {
  return (
    <Grid container spacing={4} minHeight="400px" alignItems="center">
      <PolygonSvg src="/static/img/landing/polygon-white-background.svg" />
      <BubbleSvg src="/static/img/landing/2-bubble.svg" />

      <Grid item>
        <Typography variant="landingTitle">
          {text('LANDING.PRINCIPLES.TITLE')}
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="landingText" sx={{ color: '#707070' }}>
          {text('LANDING.PRINCIPLES.DESCRIPTION')}
        </Typography>
      </Grid>

      <Grid item container direction="row">
        <Grid item container spacing={4} alignItems="center" xs>
          <Grid item>
            <Icon src="/static/img/landing/landing-principles/icon-1.svg" />
          </Grid>
          <Grid item>
            <Typography variant="landingText">
              Мы приносим пользу и ценность
              <br /> предпринимателям
            </Typography>
          </Grid>
        </Grid>

        <Grid item container spacing={4} alignItems="center" xs>
          <Grid item>
            <Icon src="/static/img/landing/landing-principles/icon-2.svg" />
          </Grid>
          <Grid item>
            <Typography variant="landingText">
              Мы ценим наших клиентов и дорожим
              <br /> их доверием
            </Typography>
          </Grid>
        </Grid>

        <Grid item container spacing={4} alignItems="center" xs>
          <Grid item>
            <Icon src="/static/img/landing/landing-principles/icon-3.svg" />
          </Grid>
          <Grid item>
            <Typography variant="landingText">
              Мы гарантируем качество и<br /> ответственность результата
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

const PolygonSvg = styled.img`
  position: absolute;
  top: 50%;
  right: 3%;
  @media (max-width: 1366px) {
    display: none;
  }
`;

const BubbleSvg = styled.img`
  position: absolute;
  top: 50%;
  left: 3%;
  @media (max-width: 1366px) {
    display: none;
  }
`;
