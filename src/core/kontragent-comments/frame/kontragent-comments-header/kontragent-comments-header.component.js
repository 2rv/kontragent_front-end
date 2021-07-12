import styled from 'styled-components';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function KontragentCommentsHeaderComponent(props) {
  const { companyName, companyType } = props;
  return (
    <HeaderContainer>
      <KontragentCommentsText tid="KONTRAGENT_COMMENTS.HEADER.TITLE" />
      <div>
        <SecondaryText>{companyType}</SecondaryText>
        &nbsp;
        <PrimaryText>{companyName}</PrimaryText>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: ${spacing(3)};
  }
`;

const KontragentCommentsText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
