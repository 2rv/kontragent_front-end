import styled from 'styled-components';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { ReactComponent as ApprovedCompanyIcon } from '../../../../asset/svg/approvedCompanyIcon.svg';
import { ReactComponent as IconStar } from '../../../../asset/svg/star-icon.svg';
import {
  THEME_VALUE,
  THEME_COLOR,
  THEME_SIZE,
  spacing,
} from '../../../../lib/theme';

export function CounterpartiesListItemComponent(props) {
  const {
    approved,
    company,
    userCompany,
    turnover,
    addCharges,
    risks,
    userRating,
    generalRating,
  } = props.data;

  return (
    <Container>
      <PrimaryBox>
        <Indent>
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
            <Rating>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <StarIcon key={index} fullStar={userRating >= item} />
              ))}
            </Rating>
            <PrimaryText>
              {generalRating} <Text> Баллов</Text>
            </PrimaryText>
          </InspectionRequestListItemContainer>
        </Indent>
      </PrimaryBox>
    </Container>
  );
}
const StarIcon = styled(IconStar)`
  fill: ${({ fullStar }) => fullStar && THEME_COLOR.TEXT.WARNING};
`;
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

const Sum = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
