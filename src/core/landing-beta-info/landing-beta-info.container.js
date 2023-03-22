import styled from 'styled-components';

import { LandingLayout } from '../../lib/common/landing';
import { LandingBetaInfoDesktopComponent } from './landing-beta-info-desktop.component';

export function LandingBetaInfoContainer() {
  return (
    <Layout>
      <LandingBetaInfoDesktopComponent graphicData={GRAPHIC_DATA} />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
  @media (min-width: 0px) and (max-width: 600px) {
    background-image: url('/static/img/landing/landing-beta-info/background-mobile.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
  @media (min-width: 1366px) {
    background-image: url('/static/img/landing/landing-beta-info/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
  }
`;

const GRAPHIC_DATA = [
  {
    date: 'Январь 2022',
    tasks: [
      'Создание профиля компании;',
      'Рейтинг контрагента;',
      'Проверка контрагентов;',
      'Проверка своей компании;',
    ],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile:
      '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Февраль 2022',
    tasks: [
      'Загрузка книг покупок;',
      'Доступ к данным  ЕГРЮЛ и ЕГРИП;',
      'Форма обратно связи и чат с менеджером;',
      'Новостная лента;',
    ],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile:
      '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Март 2022',
    tasks: [
      'Собственный текстовый и видео чат;',
      'Выставление счета на пополнение баланса;',
      'Аналитика причины негатива контрагентов;',
      'Реферальная система;',
    ],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile:
      '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Апрель 2022',
    tasks: [
      'Оценка актов выездной и камеральной проверки;',
      'Синхронизация с 1С;',
      'Экспресс-оценка контрагента;',
      'Мобильная версия и Push-уведомления;',
    ],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile:
      '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
  },
];
