import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';

import { CicleDivider } from '../../../../lib/elements/divider';
import { ReactComponent as MessageIcon } from '../../../../asset/svg/message-icon.svg';

import Image from 'next/image';

export function ArbitrageRequestListItemComponent(props) {
  const { id, status, topic, recipient, date, messageNumber } = props.data;

  return (
    <PrimaryBox>
      <IndentLayout type="MEDIUM">
        <ArbitrageListItemLayout>
          <ArbitrageListItemInfoLayout>
            <RecipientAvatarWrapper>
              <Image
                src="/static/img/tempArbitrageRecipientAvatar.svg"
                layout="fill"
              />
            </RecipientAvatarWrapper>

            <SectionLayout type="SMALL">
              <TopicNameText>{topic}</TopicNameText>
              <RequestListItemDataContainer>
                <SecondaryText>{recipient}</SecondaryText>
                <CicleDivider />
                <SecondaryText>{date}</SecondaryText>
                <CicleDivider />
                <StatusText statusId={id}>{status}</StatusText>
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

const TopicNameText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
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
