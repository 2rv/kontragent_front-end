import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';
import { LandingButtonComponent } from '../../lib/common/landing/landing-button.component';

export function LandingStartNowDesktopComponent() {
  return (
    <LandingLayout>
      <Typography variant="landingTitleHero" sx={{ color: '#fff' }}>
        Начните пользоваться платформой
      </Typography>
      <Box sx={{ mt: 6, mb: 6, maxWidth: '850px' }} display="flex" flexDirection="column" gap="32px">
        <Typography variant="landingText" sx={{ color: '#fff' }}>
          Использование постоянно обновляемых алгоритмов и методических рекомендаций со стороны ФНС РФ, ЦБ РФ и Росфинмониторинга РФ.
        </Typography>
        <Typography variant="landingText" sx={{ color: '#fff' }}>
          Более 20-ти источников информации с государственных платформ.
        </Typography>
        <Typography variant="landingText" sx={{ color: '#fff' }}>
          Обновляемые базы данных о недобросовестных контрагентах, информацию которую сообщают юзеры в рамках их финансово-хозяйственной деятельности.
        </Typography>
      </Box>
      <LandingButtonComponent
        tid="Пройти регистрацию"
        sx={{
          width: '320px',
          backgroundColor: '#fff',
          color: '#3AB8FF',
          '&:hover': {
            background: '#f3f3f3'
          }
        }}
      />
    </LandingLayout>
  );
}
