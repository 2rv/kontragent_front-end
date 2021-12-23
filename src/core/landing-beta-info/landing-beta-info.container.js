import { LandingBetaInfoDesktopComponent } from "./landing-beta-info-desktop.component";

export function LandingBetaInfoContainer() {
  return (
    <LandingBetaInfoDesktopComponent graphicData={GRAPHIC_DATA} />
  );
}

const GRAPHIC_DATA = [
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
  },
];
