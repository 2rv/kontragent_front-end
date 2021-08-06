import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryLink } from '../../../../lib/elements/link';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
// import { ReactComponent as IconStar } from '../../../../asset/svg/star-icon.svg';
import { CardBody } from '../card-body';

const myCounterpartiesListData = [
  {
    approved: true,
    company: 'ООО "КАПСТРОЙЭНЕРОГОТЕХ"',
    userCompany: 'ООО "FLYONE DESIGN"',
    turnover: '56 652.40',
    addCharges: '15',
    risks: '5%',
    userRating: 4,
    generalRating: 3,
  },
  {
    approved: false,
    company: 'ООО "ТЕХЭЛЕКТРО МСК"',
    userCompany: 'ООО "FLYONE DESIGN"',
    turnover: '1 250.40',
    addCharges: '0',
    risks: null,
    userRating: 0,
    generalRating: 5,
  },
];
export function MyCounterpartiesCardItemComponent() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.MY_COUNTERPARTIES" />}
      content={
        <Column>
          <List>
            {myCounterpartiesListData.map((data, index) => (
              <CounterpartiesListItemComponent key={index} data={data} />
            ))}
          </List>
          <ShowMore tid="DASHBOARD_CARD.SHOW_MORE" />
        </Column>
      }
    />
  );
}

const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${spacing(4)};
`;
const ShowMore = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  padding: ${spacing(4)};
`;
const Column = styled.div`
  display: flex;
  flex: 1;
  gap: ${spacing(2)};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;

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
    <CounterPartiesCase>
      <CompanyName>{company}</CompanyName>
      <CounterPartiesContent>
        <Sum>
          {turnover} <Text> руб.</Text>
        </Sum>
        <Rating>
          {/* {[1, 2, 3, 4, 5].map((item, index) => (
            <StarIcon key={index} activ={userRating >= item ? 1 : 0} />
          ))} */}
        </Rating>
      </CounterPartiesContent>
    </CounterPartiesCase>
  );
}
// const StarIcon = styled(IconStar)`
//   fill: ${(p) => p.activ && THEME_COLOR.TEXT.WARNING};
// `;
const Rating = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: ${spacing(1)};
`;

const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const CounterPartiesCase = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  display: flex;
  flex-direction: column;
  height: 80px;
  padding: ${spacing(4)};
  width: 100%;
  background-color: #f3f3f3;
  gap: ${spacing(2)};
`;
const CounterPartiesContent = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Sum = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const CompanyName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
