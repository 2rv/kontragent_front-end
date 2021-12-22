import Typography from '@mui/material/Typography';

import { LandingButtonComponent } from '../../lib/common/landing/landing-button.component';
import { LandingLayout } from '../../lib/common/landing/landing-layout.component';

export function LandingAboutDesktopComponent() {
  return (
    <LandingLayout>
      <Typography variant="landingTitleHero">
        Что мы предлагаем?
      </Typography>
      <Typography variant="landingText" sx={{ mt: 6, mb: 6, maxWidth: '850px' }}>
        Платформа для проверки нахождения контрагента (или будущего контрагента) в списке юридических лиц, в отношении которых налоговыми органами передана
        информация в систему ФНС России об отсутствии источника применения правомерной
        налоговой выгоды в виде вычета/возмещения НДС по книгам продаж.
      </Typography>
      <LandingButtonComponent
        tid="Пройти регистрацию"
        sx={{ width: '320px' }}
      />
    </LandingLayout>
  );
}
