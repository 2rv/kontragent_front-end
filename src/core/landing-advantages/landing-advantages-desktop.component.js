import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing';
import { LandingAdvantagesSectionDesktopCompmponent } from './frame/landing-advantages-section-desktop.component';

export function LandingAdvantagesDesktopComponent() {
  return (
    <Layout>
      <Box display="grid" gap="32px">
        <LandingAdvantagesSectionDesktopCompmponent
          rowReverse={true}
          image={`/static/img/landing/landing-advantages/image-1.jpg`}
          title={`Что покупают клиенты на нашей платформе?`}
          description={
            <SmallText variant="body1" sx={{ mt: 6 }}>
              Информационную услугу, а простым языком диагностику книги покупок на предмет наличия расхождений или разрывов по декларации НДС. Клиент получает детальную расшифровку
              выявленных проблемных участков, а также рекомендации специалистов нашей платформы по ее устранению и пресечению.
            </SmallText>
          }
        />
        <LandingAdvantagesSectionDesktopCompmponent
          image={`/static/img/landing/landing-advantages/image-2.jpg`}
          title={`Как происходит диагностика книг покупок на платформе?`}
          description={
            <SmallText variant="body1" sx={{ mt: 6 }}>
              Платформа построена на Artificial Intelligence — AI (Искусственный Интеллект) и Machine Learning — ML (Машинное обучение).<br/><br/>
              Простыми словами это выявление проблемы по принципу математической модели, которая проводит анализ на основе полученного объёма данных, с результатом точности более 97%
            </SmallText>
          }
        />
        <LandingAdvantagesSectionDesktopCompmponent
          rowReverse={true}
          image={`/static/img/landing/landing-advantages/image-3.jpg`}
          title={`Что получают клиенты после диагностики?`}
          description={
            <SmallText variant="body1" sx={{ mt: 6 }}>
              Поиск и выявление проблемных участков в заданных периодах.<br/>
              Аналитическое заключение и выводы, содержащее ключевые рекомендации по устранению и пресечению в будущем проблемных эпизодов.<br/>
              Аналитическая справка о ФХД вашего контрагента, основанная на критериях добросовестности налогоплательщика.<br/>
              Заключение эксперта платформы о целесообразности работы с контрагентом.
            </SmallText>
          }
        />
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
