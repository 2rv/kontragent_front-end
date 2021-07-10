import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { BookListContainer } from './frame';
import { FilterComponent } from '../../lib/elements/filter-component';
import { SecondaryButton } from '../../lib/elements/button';

export function BookReviewListComponent(props) {
  const { bookReviewListData, bookReviewListSelectOption } = props;
  return (
    <Container>
      <FilterComponent
        titleTid="Книги"
        selectOption={bookReviewListSelectOption}
        placeholderTid="Найти книгу"
      >
        <Button tid="Загрузить книгу" />
      </FilterComponent>
      <BookListContainer bookReviewListData={bookReviewListData} />
    </Container>
  );
}

const Container = styled.div`
  padding: ${spacing(8)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
const Button = styled(SecondaryButton)`
  width: 226px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
