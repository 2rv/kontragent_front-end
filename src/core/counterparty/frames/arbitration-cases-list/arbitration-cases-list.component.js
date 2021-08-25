import styled from 'styled-components';
import { ReactComponent as MessageIcon } from '../../../../asset/svg/message.svg';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { CircleDivider } from '../../../../lib/elements/divider';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';
import { BaseList } from '../../../../lib/elements/list';

export function ArbitrationCasesListComponent(props) {
  const { arbitrationCasesListData } = props;
  return (
    <BaseList
      listData={arbitrationCasesListData}
      skeletonAction={false}
      itemBackground={THEME_COLOR.COLOR.SECONDARY}
    >
      {(props) => {
        const { id, image, text, status, name, time, info, messages } = props;
        return (
          <Container>
            <Content>
              <Image src={image} />
              <InfoCase>
                <Line>
                  <MessageText>{text}</MessageText>
                  <Status tid={status.title} statusId={status.id} />
                </Line>
                <Line>
                  <FullNameText>{name}</FullNameText>
                  <CircleDivider />
                  <Date>{time}</Date>
                  <CircleDivider />
                  <Info tid={info.title} infoId={info.id} />
                </Line>
              </InfoCase>
            </Content>
            <MessagesCase>
              <MessageIcon />
              <Messages>{messages}</Messages>
            </MessagesCase>
          </Container>
        );
      }}
    </BaseList>
  );
}
const Content = styled.div`
  display: flex;
  flex: 1;
  gap: ${spacing(3)};
  align-items: center;
`;
const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
const InfoCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
`;
const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
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
const MessagesCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
