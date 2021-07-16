import styled from 'styled-components';

import { ReactComponent as Option } from '../../../../../../asset/svg/option-icon.svg';

import { PrimaryBox } from '../../../../../../lib/elements/box';
import { IndentLayout } from '../../../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../../../lib/elements/text';
import { CircleDivider } from '../../../../../../lib/elements/divider';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../../../lib/theme';

export function ParticipantsListComponent({ participantsList }) {
  return participantsList.map((participant) => (
    <Box key={participant.id}>
      <Layout type="SMALL">
        <UserImage src={participant.image} />
        <Container>
          <Content>
            <FullnameText>{participant.name}</FullnameText>
          </Content>
          <Content>
            <StatusText tid={participant.status} />
            <CircleDivider />
            <LastVisitText>{participant.lastVisit}</LastVisitText>
          </Content>
        </Container>
        <EndContent>
          <Option />
        </EndContent>
      </Layout>
    </Box>
  ));
}

const Box = styled(PrimaryBox)`
  background: ${THEME_COLOR.COLOR.SECONDARY};
`;

const Layout = styled(IndentLayout)`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: ${spacing(2)};
  padding: ${spacing(2)};
  padding-left: ${spacing(4)};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: ${spacing(2)};
`;

const UserImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 30px;
`;

const FullnameText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const StatusText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;

const LastVisitText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const EndContent = styled.div`
  display: flex;
  align-items: center;
`;
