import styled from 'styled-components';

import { PrimaryText, SecondaryText } from '../../../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../../../lib/theme';

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <ChecksText tid="KONTRAGENT_CHECKS.HEADER.TITLE" />
      <div>
        <SecondaryText tid="KONTRAGENT_CHECKS.HEADER.COMPANY.TITLE" />
        &nbsp;
        <CompanyName>"Компания Гермес-Электро"</CompanyName>
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

const ChecksText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
