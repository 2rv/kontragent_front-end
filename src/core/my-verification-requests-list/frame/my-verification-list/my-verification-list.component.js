import styled from 'styled-components';
import {
  IndentLayout,
  SectionLayout,
  ButtonLayout,
} from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CircleDivider } from '../../../../lib/elements/divider';
import {
  THEME_VALUE,
  THEME_COLOR,
  THEME_SIZE,
  spacing,
} from '../../../../lib/theme';
import { BaseList } from '../../../../lib/elements/list';

export function MyVerificationListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    myVerificationListData,
  } = props;
  return (
    <BaseList
      listData={myVerificationListData}
      skeletonAction={pageLoading || isPending}
    >
      {(props) => {
        const {
          company,
          inspectionTypeId,
          inspectionTypeTid,
          sum,
          date,
          inspectionStatusId,
          inspectionStatusTid,
          payed,
        } = props;
        return (
          <Container>
            <SectionLayout type="SMALL">
              <Line>
                <CompanyName>{company}</CompanyName>
                <InspectionType
                  tid={inspectionTypeTid}
                  type={inspectionTypeId}
                />
              </Line>
              <Line>
                <Price>{sum}</Price>
                <CircleDivider />
                <SecondaryText>{date}</SecondaryText>
                <CircleDivider />
                <StatusText
                  tid={inspectionStatusTid}
                  statusId={inspectionStatusId}
                />
              </Line>
            </SectionLayout>
            <ActionCase>
              <CancelButton tid="MY_VERIFICATION_REQUESTS_LIST.BUTTON.CANCEL" />
              <Button
                payed={payed}
                disabled={payed ? true : false}
                tid={
                  payed
                    ? 'MY_VERIFICATION_REQUESTS_LIST.BUTTON.PAYED'
                    : 'MY_VERIFICATION_REQUESTS_LIST.BUTTON.NOT_PAYED'
                }
              />
            </ActionCase>
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
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
`;
const ActionCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
`;
const InspectionType = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${(props) => {
    switch (props.type) {
      case 0:
        return THEME_COLOR.TEXT.ACCENT;
      case 1:
        return THEME_COLOR.TEXT.PREMIUM;
      default:
        return THEME_COLOR.TEXT.ERROR;
    }
  }};
`;
const StatusText = styled(SecondaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${(props) => {
    switch (props.statusId) {
      case 0:
        return THEME_COLOR.TEXT.SUCCESS;
      case 1:
        return THEME_COLOR.TEXT.WARNING;
      case 2:
        return THEME_COLOR.TEXT.ERROR;
      default:
        return THEME_COLOR.TEXT.ERROR;
    }
  }};
`;
const Price = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  min-width: max-content;
`;
const Button = styled(PrimaryButton)`
  background-color: ${(props) => props.payed && THEME_COLOR.TEXT.SECONDARY};
  width: 160px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CancelButton = styled(PrimaryButton)`
  color: ${THEME_COLOR.TEXT.VALIDATION};
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  width: 160px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
