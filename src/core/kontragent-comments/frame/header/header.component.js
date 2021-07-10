import styled from 'styled-components';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <KontragentCommentsText tid="KONTRAGENT_COMMENTS.HEADER.TITLE" />
      <div>
        <SecondaryText tid="KONTRAGENT_COMMENTS.HEADER.COMPANY.TITLE" />&nbsp;
        <PrimaryText tid="KONTRAGENT_COMMENTS.HEADER.COMPANY.NAME" />
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

const KontragentCommentsText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
