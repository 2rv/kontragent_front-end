import { BaseList } from '../../../../lib/elements/list';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { CircleDivider } from '../../../../lib/elements/divider';
import { ReactComponent as MessageIcon } from '../../../../asset/svg/message-icon.svg';
import Image from 'next/image';

export function LawyerRequestListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    myLawyerRequestListData,
  } = props;
  return (
    <BaseList
      listData={myLawyerRequestListData}
      skeletonAction={pageLoading || isPending}
    >
      {(props) => {
        const { id, status, topic, recipient, date, messageNumber, avatar } =
          props;
        return (
          <Container>
            <Content>
              <AvatarCase>
                <Image src={avatar} layout="fill" />
              </AvatarCase>
              <SectionLayout type="SMALL">
                <TopicNameText>{topic}</TopicNameText>
                <Line>
                  <SecondaryText>{recipient}</SecondaryText>
                  <CircleDivider />
                  <SecondaryText>{date}</SecondaryText>
                  <CircleDivider />
                  <StatusText tid={status} statusId={id} />
                </Line>
              </SectionLayout>
            </Content>
            <InfoCase>
              <MessageIcon />
              <SecondaryText>{messageNumber}</SecondaryText>
            </InfoCase>
          </Container>
        );
      }}
    </BaseList>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: ${spacing(4)};
`;
const AvatarCase = styled.div`
  position: relative;
  min-width: 56px;
  height: 56px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;
const InfoCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: center;
`;
const TopicNameText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
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
