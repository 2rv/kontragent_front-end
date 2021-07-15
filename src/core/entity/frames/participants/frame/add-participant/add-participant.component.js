import styled from 'styled-components';

import { PrimaryBox } from '../../../../../../lib/elements/box';
import { SectionLayout, IndentLayout } from '../../../../../../lib/elements/layout';
import { PrimaryInput } from '../../../../../../lib/elements/input';
import { SecondaryButton } from '../../../../../../lib/elements/button';
import { PrimaryText, SecondaryText } from '../../../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../../../lib/theme';

export function AddParticipantComponent() {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <AddParticipantText tid="Добавить сотрудника" />
          <FieldsContainer>
            <PrimaryInput placeholder="Почта пользователя" />
            <SecondaryButton tid="Пригласить" />
          </FieldsContainer>
          <div>
            <SecondaryText tid="Добавляя пользователя он автоматически становится менеджером, для изменения должности читайтев FAQ" />&nbsp;
            <MoreDetailsText tid="Подробнее" />
          </div>
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}

const AddParticipantText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;

const MoreDetailsText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: ${spacing(4)};
`;
