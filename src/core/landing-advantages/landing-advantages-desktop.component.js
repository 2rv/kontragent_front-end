import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';
import { LandingAdvantagesSectionDesktopCompmponent } from './frame/landing-advantages-section-desktop.component';

export function LandingAdvantagesDesktopComponent() {
  return (
    <LandingLayout>
      <LandingAdvantagesSectionDesktopCompmponent
        rowReverse={true}
        image={`/static/img/landing-advantages-1.jpg`}
        title={`Что покупают клиенты на нашей платформе?`}
        description={
          <Typography variant="body1" sx={{ mt: 6 }}>
            Информационную услугу, а простым языком диагностику книги покупок на предмет наличия расхождений или разрывов по декларации НДС. Клиент получает детальную расшифровку
            выявленных проблемных участков, а также рекомендации специалистов нашей платформы по ее устранению и пресечению.
          </Typography>
        }
      />
      <LandingAdvantagesSectionDesktopCompmponent
        image={`/static/img/landing-advantages-2.jpg`}
        title={`Как происходит диагностика книг покупок на платформе?`}
        description={
          <Typography variant="body1" sx={{ mt: 6 }}>
            Платформа построена на Artificial Intelligence — AI (Искусственный Интеллект) и Machine Learning — ML (Машинное обучение).<br/><br/>
            Простыми словами это выявление проблемы по принципу математической модели, которая проводит анализ на основе полученного объёма данных, с результатом точности более 97%
          </Typography>
        }
      />
      <LandingAdvantagesSectionDesktopCompmponent
        rowReverse={true}
        image={`/static/img/landing-advantages-3.jpg`}
        title={`Что получают клиенты после диагностики?`}
        description={
          <Typography variant="body1" sx={{ mt: 6 }}>
            Поиск и выявление проблемных участков в заданных периодах.<br/>
            Аналитическое заключение и выводы, содержащее ключевые рекомендации по устранению и пресечению в будущем проблемных эпизодов.<br/>
            Аналитическая справка о ФХД вашего контрагента, основанная на критериях добросовестности налогоплательщика.<br/>
            Заключение эксперта платформы о целесообразности работы с контрагентом.
          </Typography>
        }
      />
    </LandingLayout>
  );
}
