import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';

import { LandingLayout } from '../../lib/common/landing';
import { LandingBetaInfoDesktopComponent } from './landing-beta-info-desktop.component';
import { LandingBetaInfoMobileComponent } from './landing-beta-info-mobile.component';

export function LandingBetaInfoContainer() {
  const desktopBreakpoint = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const mobileBreakpoint = useMediaQuery(theme => theme.breakpoints.between('xs', 'lg'));

  return (
    <Layout>
      {Boolean(desktopBreakpoint) && <LandingBetaInfoDesktopComponent graphicData={GRAPHIC_DATA} />}
      {Boolean(mobileBreakpoint) && <LandingBetaInfoMobileComponent graphicData={GRAPHIC_DATA} />}
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
  @media (min-width: 0px) and (max-width: 600px) {
    background-image: url("/static/img/landing/landing-beta-info/background-mobile.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
  @media (min-width: 1366px) and (max-width: 1600px) {
    background-image: url("/static/img/landing/landing-beta-info/background-1366.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
  @media (min-width: 1601px) {
    background-image: url("/static/img/landing/landing-beta-info/background-1600.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;

const GRAPHIC_DATA = [
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile: '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile: '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile: '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Январь 01.01.2022',
    tasks: ['Добавление книг', 'Рейтинг контрагента', 'Форма обратной связи', 'Чат с менеджером'],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile: '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
  },
];
