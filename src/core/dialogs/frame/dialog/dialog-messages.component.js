import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

export function DialogMessagesComponent({ img, message }) {
  return (
    message.you ? (
      <MessageContent endContent>
        <Message>
          <InfoText endContent>{message.you}:</InfoText>
          <MessageText>{message.text}</MessageText>
          <InfoText endContent>{message.date}</InfoText>
        </Message>
        <UserImage endContent src={img} />
      </MessageContent>
    ) : (
      <MessageContent>
        <Message>
          <UserImage src={img} />
          <MessageText>{message.text}</MessageText>
        </Message>
        <InfoText marginLeft={spacing(10)}>{message.date}</InfoText>
      </MessageContent>
    )
  );
}

const MessageContent = styled.div`
  margin-bottom: ${spacing(6)};

  ${(props) => props.endContent && `
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;

    div {
      display: flex;
      flex-direction: column;
    }
  `};
`;

const Message = styled.div`
  margin: ${spacing(2)} 0;
  display: flex;
`;

const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${(props) => props.endContent ? `
    margin-left: ${spacing(2)};
    margin-bottom: ${spacing(8)};
  ` : `
    margin-right: ${spacing(2)};
    margin-top: ${spacing(8)};
  `};
`;

const MessageText = styled.p`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.SECONDARY};
  background: ${THEME_COLOR.COLOR.SECONDARY};
  max-width: 300px;
  padding: ${spacing(4)};
  margin: ${spacing(2)} 0;
  border-radius: 10px;
  line-height: 21px;
`;

const InfoText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
`;
