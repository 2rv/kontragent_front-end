import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { CompanyListItem } from './company-list.item';
import { SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
export function CompanyListComponent(props) {
  return (
    <SectionLayout>
      <Columns>
        <SecondaryText>Юрлицо</SecondaryText>
        <SecondaryText>Книги</SecondaryText>
        <SecondaryText>Контрагентов</SecondaryText>
        <SecondaryText>Оборот</SecondaryText>
        <SecondaryText>
          Доначисления<InfoButton>?</InfoButton>
        </SecondaryText>
        <SecondaryText>Риски</SecondaryText>
        <SecondaryText>Народный рейтинг</SecondaryText>
        <SecondaryText>Пени</SecondaryText>
        <SecondaryText>Штрафы</SecondaryText>
      </Columns>
      <Divider />
      {props.companyListData.map((company, index) => (
        <CompanyListItem
          key={index}
          companyName={company.companyName}
          books={company.books}
          kontragent={company.kontragent}
          turnover={company.turnover}
          addCharges={company.addCharges}
          risks={company.risks}
          generalRating={company.generalRating}
          penalties={company.penalties}
          fines={company.fines}
          finesNumber={company.finesNumber}
        />
      ))}
    </SectionLayout>
  );
}

const Divider = styled(PrimaryDivider)`
  background-color: ${THEME_COLOR.COLOR.BASE};
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 3fr 4fr 4fr 1fr 3fr 2fr 3fr;
  grid-column-gap: ${spacing(4)};
`;

const InfoButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.COLOR.BASE};
  font-size: ${THEME_SIZE.FONT.TINY};
  margin-left: ${spacing(2)};
`;
