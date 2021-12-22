import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';

export function LandingBetaInfoDesktopComponent({ graphicData }) {
  return (
    <LandingLayout>
      <Grid container gap="32px">
        <Grid item display="flex" flexDirection="column">
          <Typography variant="landingTitleHero">
            Наша платформа в Бета-версии
          </Typography>
          <Typography variant="landingText" sx={{ mt: 6, mb: 6, maxWidth: '700px' }}>
            Каждый месяц мы внедряем новый функционал в нашу платформу
            и постоянно улучшаем текущий. Станьте первыми, кто получит
            уникальные бонусы от пользования нашей платформы.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="space-between" alignItems="center" gap="32px">
            {graphicData.map(({ date, tasks }, index) => (
              <Grid key={index} item display="flex" flexDirection="column">
                <Typography variant="title" sx={{ mb: 5 }}>{date}</Typography>
                {tasks.map((task, index) => (
                  <Typography key={index} variant="landingText">{task}</Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </LandingLayout>
  );
}
