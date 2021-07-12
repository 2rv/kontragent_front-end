import styled from 'styled-components';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <ArbitrationCasesText tid="ARBITRATION_CASES.HEADER.TITLE" />
      <div>
        <SecondaryText tid="ARBITRATION_CASES.HEADER.COMPANY.TITLE" />&nbsp;
        <PrimaryText tid="ARBITRATION_CASES.HEADER.COMPANY.NAME" />
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    line-height 20px;
    margin-bottom: ${spacing(3)};
  }
`;

const ArbitrationCasesText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
