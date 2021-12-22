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
  },
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
  },
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
  },
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
  },
];
