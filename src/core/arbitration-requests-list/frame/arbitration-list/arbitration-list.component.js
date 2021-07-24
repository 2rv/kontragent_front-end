import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { CircleDivider } from '../../../../lib/elements/divider';
import { ReactComponent as MessageIcon } from '../../../../asset/svg/message-icon.svg';
import { SectionLayout } from '../../../../lib/elements/layout';
import { BaseList } from '../../../../lib/elements/list';

export function ArbitrationListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    arbitrationListData,
  } = props;
  return (
    <BaseList listData={arbitrationListData} skeletonAction={isPending}>
      {(props) => {
        const {
          statusId,
          statusTid,
          topic,
          recipient,
          date,
          messageNumber,
          avatar,
        } = props;
        return (
          <Container>
            <Content>
              <Avatar src={avatar} />
              <SectionLayout type="SMALL">
                <TopicNameText>{topic}</TopicNameText>
                <Line>
                  <SecondaryText>{recipient}</SecondaryText>
                  <CircleDivider />
                  <SecondaryText>{date}</SecondaryText>
                  <CircleDivider />
                  <StatusText tid={statusTid} statusId={statusId} />
                </Line>
              </SectionLayout>
            </Content>
            <MessageInfoCase>
              <MessageIcon />
              <SecondaryText>{messageNumber}</SecondaryText>
            </MessageInfoCase>
          </Container>
        );
      }}
    </BaseList>
  );
}
const Avatar = styled.img`
  width: 56px;
  height: 56px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(4)};
`;
const MessageInfoCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: center;
`;
const TopicNameText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
`;
const StatusText = styled(SecondaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${(props) =>
    props.statusId === 0
      ? THEME_COLOR.TEXT.SUCCESS
      : props.statusId === 1
      ? THEME_COLOR.TEXT.ACCENT
      : THEME_COLOR.TEXT.WARNING};
`;
