import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';
import { LandingButtonComponent } from '../../lib/common/landing/landing-button.component';

export function LandingHeroDesktopComponent() {
  return (
    <LandingLayout>
      <Typography variant="landingTitle">
        Платформа бизнес-сообщества
      </Typography>
      <Typography variant="landingText" sx={{ mt: 6, mb: 6, maxWidth: '500px' }}>
        Выявите налоговые риски с недобросовестными контрагентами в режиме онлайн
      </Typography>
      <LandingButtonComponent
        tid="Узнать больше"
        sx={{ width: '320px' }}
      />
    </LandingLayout>
  );
}
