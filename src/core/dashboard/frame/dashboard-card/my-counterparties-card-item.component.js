import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IconButton, TextButton } from '../../../../lib/elements/button';
import { ReactComponent as StarIcon } from '../../../../asset/svg/star-icon.svg';
import { SecondarySelect } from '../../../../lib/elements/field';

const items = [
  {
    title: `ООО "ТЕХЭЛЕКТРО МСК"`,
    price: '50550.00',
    valute: 'руб.',
    rate: '5',
    discount: '5%',
  },
  {
    title: `ООО "КАПСТРОЙЭНЕРГОТЕХ"`,
    price: '10200.50',
    valute: 'руб.',
    rate: '3',
    discount: '15%',
  },
];
const options = [
  { id: 1, tid: 'Сначала новые' },
  { id: 2, tid: 'Сначала старые' },
  { id: 3, tid: 'Сначала лучшие' },
];
export function MyCounterpartiesCardItemComponent() {
  return (
    <Сontent>
      <Header>
        <TitlePrimary tid="DASHBOARD_CARD.MY_COUNTERPARTIES" />
        <SecondarySelect option={options} />
      </Header>
      <PrimaryDivider />
      <ContentCase>
        <ConterpartiesList>
          {items.map(({ title, price, valute, rate, discount }, index) => (
            <ConterpartiesItem key={index}>
              <TitlePrimary tid={title} />
              <ItemContent>
                <PrimaryText tid={price} />
                <ValuteText tid={valute} />
                <SymbolText tid="·" />
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <StarCase key={index} activeStar={item <= rate}>
                    <StarIcon />
                  </StarCase>
                ))}
                <SymbolText tid="·" />
                <PrimaryText tid={discount} />
              </ItemContent>
            </ConterpartiesItem>
          ))}
        </ConterpartiesList>
        <ShowMoreButton tid="DASHBOARD_CARD.SHOW_MORE" />
      </ContentCase>
    </Сontent>
  );
}
const StarCase = styled.span`
  fill: ${({ activeStar }) => (activeStar ? `#F2994A` : '#B5B5B5')};
`;
const ValuteText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const SymbolText = styled(ValuteText)`
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
const ItemContent = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(1.5)};
`;
const ConterpartiesItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  padding: ${spacing(5)} ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
const ShowMoreButton = styled(TextButton)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  padding: 16px;
  display: grid;
  width: 100%;
  justify-content: center;
`;
const ConterpartiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const ContentCase = styled.div`
  display: grid;
  gap: ${spacing(3)};
  align-items: center;
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Сontent = styled(PrimaryBox)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  padding: ${spacing(4)};
`;
