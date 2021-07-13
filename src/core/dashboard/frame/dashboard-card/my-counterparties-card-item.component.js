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
import { PrimaryLink } from '../../../../lib/elements/link';
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
        <div>Нужен селект</div>
      </Header>
      <PrimaryDivider />
      <ContentCase>
        <CounterPartiesList>
          Список контрагентов взять из my-conterparties указана высота и ширина
          удалить если надо!
        </CounterPartiesList>
        <ShowMore tid="DASHBOARD_CARD.SHOW_MORE" />
      </ContentCase>
    </Сontent>
  );
}

const CounterPartiesList = styled.div`
  background-color: blueviolet;
  display: flex;
  height: 172px;
  width: 100%;
`;
const ShowMore = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  padding: ${spacing(4)};
  background-color: red;
`;
const ContentCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  padding: ${spacing(4)};
  height: max-content;
`;
