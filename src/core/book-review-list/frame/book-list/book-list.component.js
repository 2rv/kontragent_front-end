import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { BookListItem } from './book-list.item';
import { SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
export function BookListComponent(props) {
  const { bookReviewListData } = props;
  return (
    <SectionLayout>
      <Columns>
        <SecondaryText tid="Загружена книга" />
        <SecondaryText tid="Период книги" />
        <SecondaryText tid="Ваше юр. лицо" />
        <SecondaryText tid="Тип книги" />
        <SecondaryText tid="Контрагентов" />
      </Columns>
      <Divider />
      {bookReviewListData.map((data, index) => (
        <BookListItem key={index} data={data} />
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
  gap: ${spacing(4)};
`;
