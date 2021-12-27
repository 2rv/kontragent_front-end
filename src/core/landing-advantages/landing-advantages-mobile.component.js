import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingAdvantagesSectionMobileCompmponent } from './frame/landing-advantages-section-mobile.component';

export function LandingAdvantagesMobileComponent() {
  return (
    <Box sx={{ display: { xs: 'grid', md: 'none' }, gap: '24px' }}>
      <LandingAdvantagesSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages/image-1-mobile.svg`}
        title={`Что покупают клиенты на нашей платформе?`}
        description={
          <SmallText variant="body1">
            Информационную услугу, а простым языком диагностику книги покупок на предмет наличия расхождений или разрывов по декларации НДС. Клиент получает детальную расшифровку
            выявленных проблемных участков, а также рекомендации специалистов нашей платформы по ее устранению и пресечению.
          </SmallText>
        }
      />
      <LandingAdvantagesSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages/image-2-mobile.svg`}
        title={`Как происходит диагностика книг покупок на платформе?`}
        description={
          <SmallText variant="body1">
            Платформа построена на Artificial Intelligence — AI (Искусственный Интеллект) и Machine Learning — ML (Машинное обучение).<br/><br/>
            Простыми словами это выявление проблемы по принципу математической модели, которая проводит анализ на основе полученного объёма данных, с результатом точности более 97%
          </SmallText>
        }
      />
      <LandingAdvantagesSectionMobileCompmponent
        image={`/static/img/landing/landing-advantages/image-3-mobile.svg`}
        title={`Что получают клиенты после диагностики?`}
        description={
          <ul style={{ listStyle: 'inherit', marginLeft: '15px' }}>
            <li><SmallText variant="body1">Поиск и выявление проблемных участков в заданных периодах.</SmallText></li>
            <li><SmallText variant="body1">Аналитическое заключение и выводы, содержащее ключевые рекомендации по устранению и пресечению в будущем проблемных эпизодов.</SmallText></li>
            <li><SmallText variant="body1">Аналитическая справка о ФХД вашего контрагента, основанная на критериях добросовестности налогоплательщика.</SmallText></li>
            <li><SmallText variant="body1">Заключение эксперта платформы о целесообразности работы с контрагентом.</SmallText></li>
          </ul>
        }
      />
    </Box>
  );
}

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
