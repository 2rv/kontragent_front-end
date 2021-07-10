import styled from 'styled-components';

import { ReactComponent as Message } from '../../../../asset/svg/message-icon.svg';

import { IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { CicleDivider } from '../../../../lib/elements/divider';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

export function RequestListItemComponent(props) {
  const {
    name,
    text,
    time,
    messages,
    status,
    info,
  } = props;

  return (
    <Box>
      <IndentLayout type="SMALL">
        <Container>
          <Content>
            <MessageText>{text}</MessageText>
            <Status tid={status.title} statusId={status.id} />
          </Content>
          <Content justify>
            <div>
              <FullNameText>{name}</FullNameText>
              <CicleDivider />
              <Date>{time}</Date>
              <CicleDivider />
              <Info tid={info.title} infoId={info.id} />
            </div>
            <div>
              <Message />
              <Messages>{messages}</Messages>
            </div>
          </Content>
        </Container>
      </IndentLayout>
    </Box>
  );
}

const Box = styled(PrimaryBox)`
  width: 100%;
  margin: ${spacing(4)} 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: ${spacing(2)};
  padding: ${spacing(2)};
`;

const Content = styled.div`
  position: relative;

  &,
  div {
    display: flex;
    align-items: center;
    grid-column-gap: ${spacing(2)};
  }

  ${(props) => props.justify && `
    justify-content: space-between;

    div {
      &:last-child {
        position: absolute;
        right: 0;
        bottom: 8px;
      }
    }
  `};
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

const MessageText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const Messages = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;

const FullNameText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;

const Date = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
