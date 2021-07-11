import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { BookListItem } from './book-list.item';
import { SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
export function BookListComponent(props) {
  return (
    <SectionLayout>
      <Columns>
        <SecondaryText>Загружена</SecondaryText>
        <SecondaryText>Период книги</SecondaryText>
        <SecondaryText>Ваше юр. лицо</SecondaryText>
        <SecondaryText>Тип книги</SecondaryText>
        <SecondaryText>Контрагентов</SecondaryText>
      </Columns>
      <Divider />
      {props.booksListData.map((company, index) => (
        <BookListItem
          key={index}
          loadDate={company.loadDate}
          bookPeriod={company.bookPeriod}
          companyName={company.companyName}
          bookType={company.bookType}
          kontragentNumber={company.kontragentNumber}
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
  grid-template-columns: 120px 200px 300px 130px auto auto;
  grid-column-gap: ${spacing(4)};
`;