import styled from 'styled-components';
import {
  spacing,
  THEME_SIZE,
  THEME_VALUE,
  THEME_COLOR,
} from '../../../../lib/theme';
import { BaseList } from '../../../../lib/elements/list';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';

export function SupportRequestsListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    mySupportRequestsListData,
  } = props;
  return (
    <BaseList
      listData={mySupportRequestsListData}
      skeletonAction={pageLoading || isPending}
    >
      {(props) => {
        const { problemTid, requestCause, requestStatusId, statusTid, date } =
          props;
        return (
          <Content>
            <SectionLayout type="SMALL">
              <TItleText tid={problemTid} />
              <DescriptionText>{requestCause}</DescriptionText>
            </SectionLayout>
            <Column>
              <StatusText tid={statusTid} statusId={requestStatusId} />
              <DateText>{date}</DateText>
            </Column>
          </Content>
        );
      }}
    </BaseList>
  );
}
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: ${spacing(4)};
`;

const StatusText = styled(SecondaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${(props) =>
    props.statusId === 0
      ? THEME_COLOR.TEXT.SUCCESS
      : props.statusId === 1
      ? THEME_COLOR.TEXT.WARNING
      : THEME_COLOR.TEXT.ERROR};
`;

const Column = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(2)};
  justify-content: center;
  align-items: flex-end;
`;
const TItleText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;

const DateText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const DescriptionText = styled(SecondaryText)`
  line-height: 1.5;
`;
