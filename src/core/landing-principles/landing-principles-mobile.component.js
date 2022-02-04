import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function LandingPrinciplesMobileComponent() {
  return (
    <Grid container spacing={6}>
      <Grid item container spacing={2}>
        <Grid item>
          <Typography
            variant="landingTitle"
            fontSize={{ xs: '16px', sm: 'landingTitle.fontSize' }}
          >
            {text('LANDING.PRINCIPLES.TITLE')}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="landingText"
            sx={{ color: '#707070' }}
            fontSize={{ xs: '12px', sm: 'landingText.fontSize' }}
          >
            {text('LANDING.PRINCIPLES.DESCRIPTION')}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        spacing={4}
        justifyContent="flex-start"
        alignItems="flex-start"
        wrap="nowrap"
      >
        <Grid item>
          <img src="/static/img/landing/landing-principles/icon-1-mobile.svg" />
        </Grid>

        <Grid item>
          <Typography
            variant="landingText"
            component="div"
            marginTop="-7px"
            fontSize={{ xs: '10px', sm: 'landingText.fontSize' }}
          >
            Мы приносим пользу и ценность предпринимателям
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        spacing={4}
        justifyContent="flex-start"
        alignItems="flex-start"
        wrap="nowrap"
      >
        <Grid item>
          <img src="/static/img/landing/landing-principles/icon-2-mobile.svg" />
        </Grid>

        <Grid item>
          <Typography
            variant="landingText"
            component="div"
            marginTop="-7px"
            fontSize={{ xs: '10px', sm: 'landingText.fontSize' }}
          >
            Мы ценим наших клиентов и дорожим их доверием
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        spacing={4}
        justifyContent="flex-start"
        alignItems="flex-start"
        wrap="nowrap"
      >
        <Grid item>
          <img src="/static/img/landing/landing-principles/icon-3-mobile.svg" />
        </Grid>
        <Grid item>
          <Typography
            variant="landingText"
            component="div"
            marginTop="-7px"
            fontSize={{ xs: '10px', sm: 'landingText.fontSize' }}
          >
            Мы гарантируем качество и ответственность результата
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
