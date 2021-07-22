import styled from 'styled-components';
import { ReactComponent as OptionIcon } from '../../../../../../asset/svg/option-icon.svg';
import { IndentLayout } from '../../../../../../lib/elements/layout';
import {
  PrimaryText,
  SecondaryText,
} from '../../../../../../lib/elements/text';
import { CircleDivider } from '../../../../../../lib/elements/divider';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../../../lib/theme';

export function ParticipantsListComponent({ participantsList }) {
  return participantsList.map((participant, index) => (
    <Container type="STANDART" key={index}>
      <UserImage src={participant.image} />
      <Content>
        <Line>
          <FullnameText>{participant.name}</FullnameText>
        </Line>
        <Line>
          <StatusText tid={participant.status} />
          <CircleDivider />
          <Date>{participant.lastVisit}</Date>
        </Line>
      </Content>
      <OptionIcon />
    </Container>
  ));
}
const Container = styled(IndentLayout)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: ${THEME_COLOR.COLOR.SECONDARY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: ${spacing(2)};
  padding: ${spacing(2)};
  padding-left: ${spacing(4)};
`;
const UserImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
const FullnameText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const StatusText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;
const Date = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
