import styled from 'styled-components';

import { PrimaryBox } from '../../../../../../lib/elements/box';
import { SectionLayout, IndentLayout } from '../../../../../../lib/elements/layout';
import { PrimaryField } from '../../../../../../lib/elements/field';
import { SecondaryButton } from '../../../../../../lib/elements/button';
import { PrimaryText, SecondaryText } from '../../../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../../../lib/theme';

export function AddParticipantComponent() {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <AddParticipantText tid="ENTITY.PARTICIPANTS.ADD_PARTICIPANT.TITLE" />
          <FieldsContainer>
            <PrimaryField placeholderTid="ENTITY.PARTICIPANTS.ADD_PARTICIPANT.INPUT_PLACEHOLDER" />
            <SecondaryButton tid="ENTITY.PARTICIPANTS.ADD_PARTICIPANT.INVITE" />
          </FieldsContainer>
          <div>
            <SecondaryText tid="ENTITY.PARTICIPANTS.ADD_PARTICIPANT.INFO_TEXT" />&nbsp;
            <MoreDetailsText tid="ENTITY.PARTICIPANTS.ADD_PARTICIPANT.MORE_DETAILS" />
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
