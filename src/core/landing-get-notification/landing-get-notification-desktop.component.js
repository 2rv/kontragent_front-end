import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';
import { LandingButtonComponent } from '../../lib/common/landing/landing-button.component';

export function LandingGetNotificationDesktopComponent() {
  return (
    <LandingLayout>
      <Typography variant="landingTitleHero">
        Узнайте о проблеме первыми
      </Typography>
      <Typography variant="landingText" sx={{ mt: 6, mb: 6, maxWidth: '850px' }}>
        Наша платформа как система раннего предупреждения,
        клиент получает первым сигнал о потенциальных проблемах
        как в своем бизнесе, так и в бизнесе его партнерах,
        в части применения незаконных методов по оптимизации
        налогообложения как в прошлом, так и в режиме онлайн.
      </Typography>
      <LandingButtonComponent
        tid="Пройти регистрацию"
        sx={{ width: '320px' }}
      />
    </LandingLayout>
  );
}
