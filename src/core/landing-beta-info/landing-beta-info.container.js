import styled from 'styled-components';

import { LandingLayout } from '../../lib/common/landing';
import { LandingBetaInfoDesktopComponent } from './landing-beta-info-desktop.component';
import { LandingBetaInfoMobileComponent } from './landing-beta-info-mobile.component';

export function LandingBetaInfoContainer() {
  return (
    <Layout>
      <Desktop>
        <LandingBetaInfoDesktopComponent graphicData={GRAPHIC_DATA} />
      </Desktop>
      <Mobile>
        <LandingBetaInfoMobileComponent graphicData={GRAPHIC_DATA} />
      </Mobile>
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
  @media (min-width: 1366px) {
    background-image: url("/static/img/landing/landing-beta-info/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
  }
`;

const Desktop = styled.div`
  position: relative;
  @media (min-width: 0px) and (max-width: 1140px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media (min-width: 0px) and (max-width: 1140px) {
    display: block;
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
