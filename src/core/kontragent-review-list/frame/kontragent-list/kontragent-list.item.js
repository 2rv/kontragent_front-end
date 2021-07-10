import styled from 'styled-components';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ReactComponent as ApprovedCompanyIcon } from '../../../../asset/svg/approvedCompanyIcon.svg';
import { ReactComponent as FullStar } from '../../../../asset/svg/fullstar.svg';
import { ReactComponent as EmptyStar } from '../../../../asset/svg/emptystar.svg';
import { ReactComponent as NoRatingStar } from '../../../../asset/svg/norating.svg';
import {
  THEME_VALUE,
  THEME_COLOR,
  THEME_SIZE,
  spacing,
} from '../../../../lib/theme';

export function KontragentListItem(props) {
  //PARAM RATING IS NUMBER FROM 0 TO 5, WHERE 0 IS NOT RATED
  const getRetingStars = (rating) => {
    const ratingArray = [...Array(5).keys()].map((e, index) => {
      return index < rating ? 1 : 0;
    });
    return rating !== 0
      ? ratingArray.map((star) => (star === 1 ? <FullStar /> : <EmptyStar />))
      : ratingArray.map(() => <EmptyStar />);
  };

  const {
    approved,
    company,
    userCompany,
    turnover,
    addCharges,
    risks,
    userRating,
    generalRating,
  } = props;

  return (
    <Container>
      <PrimaryBox>
        <Indent type="SMALL">
          <InspectionRequestListItemContainer>
            <IsApproved>
              {approved ? <ApprovedCompanyIcon /> : <NotApproved />}
            </IsApproved>
            <CompanyName>{company}</CompanyName>
            <CompanyName>{userCompany}</CompanyName>
            <Sum>
              {turnover} <Text> руб.</Text>
            </Sum>
            <Sum>
              {addCharges} <Text> руб.</Text>
            </Sum>
            <Text>{risks ? risks : 'Нет'}</Text>
            <Rating>{getRetingStars(userRating)}</Rating>
            <PrimaryText>
              {generalRating} <Text> Баллов</Text>
            </PrimaryText>
          </InspectionRequestListItemContainer>
        </Indent>
      </PrimaryBox>
    </Container>
  );
}

const Rating = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: ${spacing(1)};
`;

const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;

const IsApproved = styled.div`
  padding-left: ${spacing(3)};
`;

const NotApproved = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f3f3f3;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const Indent = styled.div`
  padding: ${spacing(6)} 0;
`;

const InspectionRequestListItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 4fr 3fr 3fr 1fr 2fr 3fr;
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
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
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
