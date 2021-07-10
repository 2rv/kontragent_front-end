import styled from 'styled-components';

import { ReactComponent as Message } from '../../../../asset/svg/message.svg';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { CicleDivider } from '../../../../lib/elements/divider';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

export function ArbitrationCasesListComponent({ arbitrationCasesList }) {
  return (
    arbitrationCasesList.map((arbitrationCase) => (
      <Box key={arbitrationCase.id}>
        <Layout type="SMALL">
          <ArbitrationCaseImage src={arbitrationCase.image} />
          <Container>
            <Content>
              <MessageText>{arbitrationCase.text}</MessageText>
              <Status tid={arbitrationCase.status.title} statusId={arbitrationCase.status.id} />
            </Content>
            <Content>
              <FullNameText>{arbitrationCase.name}</FullNameText>
              <CicleDivider />
              <Date>{arbitrationCase.time}</Date>
              <CicleDivider />
              <Info tid={arbitrationCase.info.title} infoId={arbitrationCase.info.id} />
            </Content>
          </Container>
          <MessagesContainer>
            <Message />
            <Messages>{arbitrationCase.messages}</Messages>
          </MessagesContainer>
        </Layout>
      </Box>
    ))
  );
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
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: ${spacing(2)};
`;

const Status = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${(props) => {
    switch (props.statusId) {
      case 0:
        return THEME_COLOR.TEXT.ACCENT;
      case 1:
        return THEME_COLOR.TEXT.VALIDATION;
      case 2:
        return THEME_COLOR.TEXT.WARNING;
      default:
        return THEME_COLOR.COLOR.ACCENT;
    }
  }};
`;

const Info = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${(props) => {
    switch (props.infoId) {
      case 0:
        return THEME_COLOR.TEXT.SUCCESS;
      case 1:
        return THEME_COLOR.TEXT.WARNING;
      case 2:
        return THEME_COLOR.TEXT.VALIDATION;
      default:
        return THEME_COLOR.COLOR.SUCCESS;
    }
  }};
`;

const ArbitrationCaseImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 30px;
`;

const MessageText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const FullNameText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;

const Date = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const Messages = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;

const MessagesContainer = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: ${spacing(1)};
`;
