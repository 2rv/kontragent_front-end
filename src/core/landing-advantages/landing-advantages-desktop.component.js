import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingAdvantagesSectionDesktopCompmponent } from './frame/landing-advantages-section-desktop.component';

export function LandingAdvantagesDesktopComponent() {
  return (
    <Box sx={{ display: { xs: 'none', lg: 'grid' }, gap: '32px' }}>
      <LandingAdvantagesSectionDesktopCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages/image-1.svg`}
        title={`Что покупают клиенты на нашей платформе?`}
        description={
          <Typography variant="body1">
            Информационную услугу, а простым языком диагностику книги покупок на предмет наличия расхождений или разрывов по декларации НДС. Клиент получает детальную расшифровку
            выявленных проблемных участков, а также рекомендации специалистов нашей платформы по ее устранению и пресечению.
          </Typography>
        }
      />
      <LandingAdvantagesSectionDesktopCompmponent
        image={`/static/img/landing/landing-advantages/image-2.svg`}
        title={`Как происходит диагностика книг покупок на платформе?`}
        description={
          <Typography variant="body1">
            Платформа построена на Artificial Intelligence — AI (Искусственный Интеллект) и Machine Learning — ML (Машинное обучение).<br/><br/>
            Простыми словами это выявление проблемы по принципу математической модели, которая проводит анализ на основе полученного объёма данных, с результатом точности более 97%
          </Typography>
        }
      />
      <LandingAdvantagesSectionDesktopCompmponent
        rowReverse={true}
        image={`/static/img/landing/landing-advantages/image-3.svg`}
        title={`Что получают клиенты после диагностики?`}
        description={
          <ul style={{ listStyle: 'inherit', marginLeft: '15px' }}>
            <li><Typography variant="body1">Поиск и выявление проблемных участков в заданных периодах.</Typography></li>
            <li><Typography variant="body1">Аналитическое заключение и выводы, содержащее ключевые рекомендации по устранению и пресечению в будущем проблемных эпизодов.</Typography></li>
            <li><Typography variant="body1">Аналитическая справка о ФХД вашего контрагента, основанная на критериях добросовестности налогоплательщика.</Typography></li>
            <li><Typography variant="body1">Заключение эксперта платформы о целесообразности работы с контрагентом.</Typography></li>
          </ul>
        }
      />
    </Box>
  );
}
