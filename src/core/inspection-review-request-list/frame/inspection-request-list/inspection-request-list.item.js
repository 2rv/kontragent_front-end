import styled from 'styled-components';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CircleDivider } from '../../../../lib/elements/divider';
import {
  THEME_VALUE,
  THEME_COLOR,
  THEME_SIZE,
  spacing,
} from '../../../../lib/theme';

export function InspectionRequestListItem(props) {
  const {
    company,
    inspectionTypeId,
    inspectionType,
    sum,
    date,
    inspectionStatusId,
    inspectionStatus,
    payed,
  } = props;
  return (
    <Container>
      <PrimaryBox>
        <IndentLayout type="MEDIUM">
          <InspectionRequestListItemContainer>
            <SectionLayout type="SMALL">
              <LineContainer>
                <CompanyName>{company}</CompanyName>
                <InspectionType type={inspectionTypeId}>
                  {inspectionType}
                </InspectionType>
              </LineContainer>

              <LineContainer>
                <Sum>{sum}</Sum>
                <CircleDivider />
                <SecondaryText>{date}</SecondaryText>
                <CircleDivider />
                <StatusText statusId={inspectionStatusId}>
                  {inspectionStatus}
                </StatusText>
              </LineContainer>
            </SectionLayout>
            <InspectionListItemButtonLayout>
              <CancelButton tid="INSPECTION.BUTTON.CANCEL" />
              <Button
                payed={payed}
                disabled={payed ? true : false}
                tid={
                  payed
                    ? 'INSPECTION.BUTTON.PAYED'
                    : 'INSPECTION.BUTTON.NOT_PAYED'
                }
              />
            </InspectionListItemButtonLayout>
          </InspectionRequestListItemContainer>
        </IndentLayout>
      </PrimaryBox>
    </Container>
  );
}

const Container = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  border: 1px solid transparent;
  :hover {
    border: 1px solid ${THEME_COLOR.COLOR.LIGHT_GREY};
  }
  transition: border ${THEME_SIZE.TRANSACTION.DEFAULT} ease;
`;

const LineContainer = styled.div`
  display: flex;
  grid-column-gap: ${spacing(2)};
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

const InspectionRequestListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const Sum = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const InspectionListItemButtonLayout = styled.div`
  display: flex;
  grid-column-gap: ${spacing(4)};
`;

const Button = styled(PrimaryButton)`
  padding: ${`${spacing(4)} ${spacing(10)}`};
  background-color: ${(props) => props.payed && THEME_COLOR.TEXT.SECONDARY};
`;

const CancelButton = styled(Button)`
  color: ${THEME_COLOR.TEXT.VALIDATION};
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;

const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
