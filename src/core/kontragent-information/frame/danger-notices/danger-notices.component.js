import styled from 'styled-components';

import { DangerNotice1Component } from './danger-notice-1.component';
import { DangerNotice2Component } from './danger-notice-2.component';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function DangerNoticesComponent({ dangerNotices1, dangerNotices2 }) {
  return (
    <div>
      <RedZoneContainer>
        <RedZoneText tid="KONTRAGENT_INFORMATION.DANGER_NOTICES.RED_ZONE" />
        <div>
          <SecondaryText tid="KONTRAGENT_INFORMATION.DANGER_NOTICES.INFO.COMPANY_TYPE" />&nbsp;
          <CompanyGermesElectroText tid="KONTRAGENT_INFORMATION.DANGER_NOTICES.INFO.COMPANY_NAME" />&nbsp;
          <SecondaryText tid="KONTRAGENT_INFORMATION.DANGER_NOTICES.INFO.DESCRIPTION" />
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
