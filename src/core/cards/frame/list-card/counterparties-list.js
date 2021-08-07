import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import {
  PrimaryText,
  PrimaryTitleText,
  SecondaryText,
} from '../../../../lib/elements/text';
import { TextButton } from '../../../../lib/elements/button';
import { SecondarySelect } from '../../../../lib/elements/field';
import { CardBody } from '../card-body';
import { PrimaryLink } from 'src/lib/elements/link';
import { BaseList } from 'src/lib/elements/list';
import { CircleDivider } from 'src/lib/elements/divider';
import { Rating } from '../../../../lib/elements/stars-rating';

const options = [
  { id: 1, tid: 'Сначала новые' },
  { id: 2, tid: 'Сначала старые' },
  { id: 3, tid: 'Сначала лучшие' },
];
const counterpartiesListData = [
  {
    companyType: 'ООО',
    companyName: '"КАПСТРОЙЭНЕРОГОТЕХ"',
    companyMoney: '56 652.40',
    risks: '5%',
    rating: 4,
  },
  {
    companyType: 'ООО',
    companyName: '"ТЕХЭЛЕКТРО МСК"',
    companyMoney: '1 250.40',
    risks: '15%',
    rating: 0,
  },
];

export function CounterpartiesListCardItem() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.MY_COUNTERPARTIES" />}
      action={<SecondarySelect dense option={options} />}
      content={
        <Container>
          <BaseList
            listData={counterpartiesListData}
            itemBackground={THEME_COLOR.COLOR.SECONDARY}
          >
            {(props) => {
              const {
                id,
                companyType,
                companyName,
                companyMoney,
                risks,
                rating,
              } = props;
              return (
                <Content>
                  <Line>
                    <PreTitle tid={companyType} />
                    <TitlePrimary tid={companyName} />
                  </Line>
                  <Line>
                    <BoldText tid={companyMoney} />
                    <Valute tid="руб." />
                    <CircleDivider />
                    <Rating value={rating} />
                    <CircleDivider />
                    <BoldText tid={risks} />
                  </Line>
                </Content>
              );
            }}
          </BaseList>
          <ShowMore tid="DASHBOARD_CARD.SHOW_MORE" />
        </Container>
      }
    />
  );
}

const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  gap: ${spacing(4)};
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(1)};
`;
const Line = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  align-items: center;
`;
const PreTitle = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Valute = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const BoldText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const ShowMore = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  padding: ${spacing(4)};
`;
