import styled from 'styled-components';

import { PrimaryText, SecondaryText } from '../../../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../../../lib/theme';

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <ReviewsTitle tid="KONTRAGENT_COMMENTS.HEADER.TITLE" />
      <div>
        <SecondaryText>Общество с ограниченной ответственностью</SecondaryText>
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
    margin-bottom: ${spacing(3)};
  }
`;

const ReviewsTitle = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
