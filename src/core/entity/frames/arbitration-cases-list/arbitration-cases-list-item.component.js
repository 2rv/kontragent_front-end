import styled from 'styled-components';

import { ReactComponent as Message } from '../../../../asset/svg/message.svg';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { CircleDivider } from '../../../../lib/elements/divider';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';

export function ArbitrationCasesListItemComponent(props) {
  const { id, image, text, status, name, time, info, messages } = props.data;
  return (
    <Container>
      <Layout type="SMALL">
        <ArbitrationCaseImage src={image} />
        <Content>
          <div>
            <MessageText>{text}</MessageText>
            &nbsp;
            <Status tid={status.title} statusId={status.id} />
          </div>
          <LineCase>
            <FullNameText>{name}</FullNameText>
            <CircleDivider />
            <Date>{time}</Date>
            <CircleDivider />
            <Info tid={info.title} infoId={info.id} />
          </LineCase>
        </Content>
        <MessagesContainer>
          <Message />
          <Messages>{messages}</Messages>
        </MessagesContainer>
      </Layout>
    </Container>
  );
}
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
const Container = styled(PrimaryBox)`
  background: ${THEME_COLOR.COLOR.SECONDARY};
  height: 80px;
  align-items: center;
  display: flex;
`;
const Layout = styled(IndentLayout)`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: auto 1fr auto;
`;
const LineCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
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
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;

const MessageText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
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
  gap: ${spacing(1)};
`;
