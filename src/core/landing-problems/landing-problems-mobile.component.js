import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function LandingProblemsMobileComponent() {
  return (
    <Grid container spacing={6}>
      <Grid item container spacing={2}>
        <Grid item>
          <Typography
            variant="landingTitle"
            fontSize={{ xs: '16px', sm: 'landingTitle.fontSize' }}
          >
            {text('LANDING.PROBLEMS.MOBILE_TITLE')}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="landingText"
            sx={{ color: '#707070' }}
            fontSize={{ xs: '12px', sm: 'landingText.fontSize' }}
          >
            {text('LANDING.PROBLEMS.DESCRIPTION')}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        spacing={4}
        justifyContent="flex-start"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item>
          <img src="/static/img/landing/landing-problems/icon-1-mobile.svg" />
        </Grid>

        <Grid item>
          <Typography
            variant="landingText"
            component="div"
            sx={{
              fontSize: { xs: '10px', sm: 'landingText.fontSize' },
              lineHeight: { xs: 1.5, sm: 1 },
            }}
          >
            Побуждение откорректировать декларацию и заплатить бюджет?
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        spacing={4}
        justifyContent="flex-start"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item>
          <img src="/static/img/landing/landing-problems/icon-2-mobile.svg" />
        </Grid>

        <Grid item>
          <Typography
            component="div"
            variant="landingText"
            sx={{
              fontSize: { xs: '10px', sm: 'landingText.fontSize' },
              lineHeight: { xs: 1.5, sm: 1 },
            }}
          >
            Регулярные вызовы на комиссию КАО ИФНС?
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        spacing={4}
        justifyContent="flex-start"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item>
          <img src="/static/img/landing/landing-problems/icon-3-mobile.svg" />
        </Grid>

        <Grid item>
          <Typography
            component="div"
            variant="landingText"
            sx={{
              fontSize: { xs: '10px', sm: 'landingText.fontSize' },
              lineHeight: { xs: 1.5, sm: 1 },
            }}
          >
            Частые запросы со стороны ИФНС вне рамок налоговых проверок?
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
