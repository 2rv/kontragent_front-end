import styled from 'styled-components';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { THEME_COLOR, THEME_SIZE, spacing, THEME_VALUE } from '../../../../lib/theme';

export function LegalEntitiesListItem(props) {
  const {
    companyName,
    books,
    kontragent,
    turnover,
    addCharges,
    risks,
    generalRating,
    penalties,
    fines,
    finesNumber,
  } = props.data;
  return (
    <Container>
      <PrimaryBox>
        <Indent>
          <InspectionRequestListItemContainer>
            <CompanyName>{companyName}</CompanyName>
            <Text>{books}</Text>
            <Text>{kontragent}</Text>
            <BoldText>
              {turnover} <LightGrayText tid="руб." />
            </BoldText>
            <BoldText>
              {addCharges} <LightGrayText tid="руб." />
            </BoldText>
            <Text>{risks ? risks : 'Нет'}</Text>
            <BoldText>
              {generalRating} <LightGrayText tid="Баллов" />
            </BoldText>
            <BoldText>
              {penalties} <LightGrayText tid="руб." />
            </BoldText>
            <BoldText>
              {fines} <LightGrayText tid="руб." />
              <BoldText>({finesNumber})</BoldText>
            </BoldText>
          </InspectionRequestListItemContainer>
        </Indent>
      </PrimaryBox>
    </Container>
  );
}

const Indent = styled.div`
  padding: ${spacing(6)} 0;
`;

const InspectionRequestListItemContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 2fr 5fr 3fr 1fr 3fr 2fr 3fr;
  grid-column-gap: ${spacing(4)};
  align-items: center;
`;

const Container = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  border: 1px solid transparent;
  :hover {
    border: 1px solid ${THEME_COLOR.COLOR.LIGHT_GREY};
  }
  transition: border ${THEME_SIZE.TRANSACTION.DEFAULT} ease;
`;

const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;

const LightGrayText = styled(Text)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const BoldText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;

const CompanyName = styled(BoldText)`
  padding-left: ${spacing(4)};
`;
