import styled from 'styled-components';

import { DangerNotice1Component } from './danger-notice-1.component';
import { DangerNotice2Component } from './danger-notice-2.component';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function DangerNoticesComponent({ dangerNotices1, dangerNotices2 }) {
  return (
    <div>
      <RedZoneContainer>
        <RedZoneText tid="Красная зона" />
        <div>
          <SecondaryText tid="Ваше ООО" />&nbsp;
          <CompanyGermesElectroText tid={'"Компания Гермес-Электро"'} />&nbsp;
          <SecondaryText tid="находится в красной зоне. Вы можете исправить это по советам ниже." />
        </div>
      </RedZoneContainer>
      <DangerNotice1Component dangerNotices1={dangerNotices1} />
      <DangerNotice2Component dangerNotices2={dangerNotices2} />
    </div>
  );
}

const RedZoneContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RedZoneText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.ERROR};
  margin-bottom: ${spacing(3)};
`;

const CompanyGermesElectroText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
