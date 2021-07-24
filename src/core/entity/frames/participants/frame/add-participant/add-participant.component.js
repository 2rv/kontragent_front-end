import styled from 'styled-components';

import { PrimaryBox } from '../../../../../../lib/elements/box';
import {
  SectionLayout,
  IndentLayout,
} from '../../../../../../lib/elements/layout';
import { PrimaryField } from '../../../../../../lib/elements/field';
import { PrimaryButton } from '../../../../../../lib/elements/button';
import {
  PrimaryText,
  SecondaryText,
} from '../../../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../../../lib/theme';
import { PrimaryLink } from '../../../../../../lib/elements/link';

export function AddParticipantComponent() {
  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <AddParticipantText tid="ENTITY.PARTICIPANTS.ADD_PARTICIPANT.TITLE" />
          <FieldsContainer>
            <PrimaryField placeholderTid="ENTITY.PARTICIPANTS.ADD_PARTICIPANT.INPUT_PLACEHOLDER" />
            <PrimaryButton tid="ENTITY.PARTICIPANTS.ADD_PARTICIPANT.INVITE" />
          </FieldsContainer>
          <div>
            <TinyText tid="ENTITY.PARTICIPANTS.ADD_PARTICIPANT.INFO_TEXT" />
            &nbsp;
            <TynyLink tid="ENTITY.PARTICIPANTS.ADD_PARTICIPANT.MORE_DETAILS" />
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
const TinyText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const TynyLink = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.TINY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 226px;
  gap: ${spacing(4)};
`;
