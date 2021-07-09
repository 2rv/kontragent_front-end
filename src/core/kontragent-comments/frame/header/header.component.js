import styled from 'styled-components';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <KontragentCommentsText tid="Отзывы" />
      <div>
        <SecondaryText tid={'Общество с ограниченной ответственностью'} />&nbsp;
        <PrimaryText tid={'"Компания Гермес-Электро"'} />
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
