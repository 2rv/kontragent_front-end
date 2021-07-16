import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { CircleDivider } from '../../../../lib/elements/divider';
import { ReactComponent as MessageIcon } from '../../../../asset/svg/message-icon.svg';

export function ArbitrationListItemComponent(props) {
  const { statusId, statusTid, topic, recipient, date, messageNumber, avatar } =
    props.data;

  return (
    <PrimaryBox>
      <IndentLayout type="STANDART">
        <Container>
          <Content>
            <Avatar src={avatar} />
            <SectionLayout type="SMALL">
              <TopicNameText>{topic}</TopicNameText>
              <ContentInfoCase>
                <SecondaryText>{recipient}</SecondaryText>
                <CircleDivider />
                <SecondaryText>{date}</SecondaryText>
                <CircleDivider />
                <StatusText tid={statusTid} statusId={statusId} />
              </ContentInfoCase>
            </SectionLayout>
          </Content>
          <MessageInfoCase>
            <MessageIcon />
            <SecondaryText>{messageNumber}</SecondaryText>
          </MessageInfoCase>
        </Container>
      </IndentLayout>
    </PrimaryBox>
  );
}
const Avatar = styled.img`
  width: 56px;
  height: 56px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
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
`;

const ContentInfoCase = styled.div`
  display: flex;
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
