import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryBox } from '../../../../lib/elements/box';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon.svg';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { CircleDivider } from '../../../../lib/elements/divider';
import { ReactComponent as MessageIcon } from '../../../../asset/svg/message-icon.svg';
import Image from 'next/image';

const dialogsListData = [
  {
    statusId: 0,
    statusTid: 'ARBITRATION_REQUESTS_LIST.STATUS.RESOLVED',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
    avatar: '/static/img/tempArbitrageRecipientAvatar.svg',
  },
  {
    statusId: 2,
    statusTid: 'ARBITRATION_REQUESTS_LIST.STATUS.REJECTED',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
    avatar: '/static/img/tempArbitrageRecipientAvatar.svg',
  },
  {
    statusId: 1,
    statusTid: 'ARBITRATION_REQUESTS_LIST.STATUS.UNDER_CONSIDERATION',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
    avatar: '/static/img/tempArbitrageRecipientAvatar.svg',
  },
];

export function DialogsCardItemComponent() {
  return (
    <Container>
      <Header>
        <TitlePrimary tid="DASHBOARD_CARD.ARBITRATION_DIALOGUES" />
        <FindIcon />
      </Header>
      <PrimaryDivider />
      <ContentCase>
        <DialogList>
          {dialogsListData.map((data, index) => (
            <ArbitrationListItemComponent key={index} data={data} />
          ))}
        </DialogList>
      </ContentCase>
    </Container>
  );
}
const Container = styled.div``;
const DialogList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${spacing(4)};
`;
const ContentCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function ArbitrationListItemComponent(props) {
  const { statusId, statusTid, topic, recipient, date, messageNumber, avatar } =
    props.data;

  return (
    <PrimaryBox>
      <IndentLayout type="MEDIUM">
        <ArbitrageListItemLayout>
          <ArbitrageListItemInfoLayout>
            <RecipientAvatarWrapper>
              <Image src={avatar} layout="fill" />
            </RecipientAvatarWrapper>
            <SectionLayout type="SMALL">
              <SecondaryText>{recipient}</SecondaryText>
              <RequestListItemDataContainer>
                <CircleDivider />
                <SecondaryText>{date}</SecondaryText>
                <CircleDivider />
              </RequestListItemDataContainer>
            </SectionLayout>
          </ArbitrageListItemInfoLayout>
          <MessageInfoWrapper>
            <MessageIcon />
            <SecondaryText>{messageNumber}</SecondaryText>
          </MessageInfoWrapper>
        </ArbitrageListItemLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}

const ArbitrageListItemLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ArbitrageListItemInfoLayout = styled.div`
  display: flex;
  align-items: center;
`;

const MessageInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: ${spacing(2)};
  align-items: center;
`;

const RecipientAvatarWrapper = styled.div`
  position: relative;
  min-width: 56px;
  height: 56px;
  margin-right: ${spacing(4)};
`;
const RequestListItemDataContainer = styled.div`
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
