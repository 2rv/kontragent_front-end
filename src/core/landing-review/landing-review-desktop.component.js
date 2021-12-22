import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';
import { LandingButtonComponent } from '../../lib/common/landing/landing-button.component';

export function LandingReviewDesktopComponent() {
  return (
    <LandingLayout>
      <Typography variant="landingTitleHero" sx={{ color: '#fff' }}>
        Точность проверки состовляет 97%
      </Typography>
      <Box sx={{ mt: 6, mb: 6, maxWidth: '850px' }} display="flex" flexDirection="column" gap="32px">
        <Typography variant="landingText" sx={{ color: '#fff' }}>
          Наш сервис базируется на информации из открытых источников и баз данных,
          а также на отзывах и рейтингах бизнес-сообществ, основанных на историях
          реальных бизнес партнеров
        </Typography>
        <Typography variant="landingText" sx={{ color: '#fff' }}>
          Каждый участник сообщества публикует информацию о рисках, связанных с работой недобросовесных контрагентов, которая видна всем участникам
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
