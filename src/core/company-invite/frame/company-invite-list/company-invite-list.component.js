import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { BaseList } from '../../../../lib/elements/list';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { BasicButton, SecondaryButton } from '../../../../lib/elements/button';
import { CircleDivider } from '../../../../lib/elements/divider';

export function CompanyInviteListComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    companyInviteListData,
  } = props;
  return (
    <BaseList
      listData={companyInviteListData}
      skeletonAction={pageLoading || isPending}
    >
      {(props) => {
        const {
          avatar,
          companyType,
          companyName,
          userInvited: { name, role },
          date,
          isAccepted,
          isCanceled,
        } = props;
        return (
          <Container>
            <Content>
              <Avatar src={avatar} />
              <Column>
                <div>
                  <CompanyName>{companyType}</CompanyName>
                  &nbsp;
                  <CompanyName>{companyName}</CompanyName>
                </div>
                <Line>
                  <LightText tid="От" />
                  <SecondaryText tid={name} />
                  <CircleDivider />
                  <LightTextTiny>{date}</LightTextTiny>
                  <CircleDivider />
                  <Role>{role}</Role>
                </Line>
              </Column>
            </Content>
            <Action>
              {isAccepted && (
                <StatusAccepted>
                  <StatusTextAccepted tid="Принято" />
                </StatusAccepted>
              )}
              {isCanceled && (
                <StatusCanceled>
                  <StatusTextCanceled tid="Отклонено" />
                </StatusCanceled>
              )}
              {!isAccepted && !isCanceled && (
                <>
                  <CancelButton tid="Отменить" />
                  <AcceptButton tid="Принять" />
                </>
              )}
            </Action>
          </Container>
        );
      }}
    </BaseList>
  );
}
const StatusTextAccepted = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const StatusTextCanceled = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.ERROR};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const StatusAccepted = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.COLOR.SUCCESS};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 46px;
`;
const StatusCanceled = styled(StatusAccepted)`
  background-color: ${THEME_COLOR.COLOR.ERROR};
`;
const Avatar = styled.img`
  min-width: 56px;
  height: 56px;
  width: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const CancelButton = styled(BasicButton)`
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  color: ${THEME_COLOR.TEXT.VALIDATION};
  width: 160px;
`;
const AcceptButton = styled(SecondaryButton)`
  width: 160px;
`;
const Action = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing(3)};
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: ${spacing(3)};
`;
const Column = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(2)};
`;

const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Role = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.ACCENT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const LightText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const LightTextTiny = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
`;
