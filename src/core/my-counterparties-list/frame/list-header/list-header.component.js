import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ListHeaderPaginationContainer } from '../list-header-pagination';
import { ListHeaderSearchContainer } from '../list-header-search';
import { ListSortContainer } from '../list-sort';
export function ListHeaderComponent(props) {
  const { myCounterpartiesSortOption } = props;
  return (
    <Container>
      <HeaderCase>
        <Title tid="MY_COUNTERPARTIES_LIST.TITLE" />
        <PaginationAndOrderVerificationContainer>
          <ListHeaderPaginationContainer
            currentPage={3}
            totalPages={4}
            disabled={true}
          />
          <PrimaryButton tid="Заказать проверку" />
        </PaginationAndOrderVerificationContainer>
      </HeaderCase>
      <InputCase>
        <ListHeaderSearchContainer />
        <ListSortContainer sortOptions={myCounterpartiesSortOption} />
      </InputCase>
    </Container>
  );
}

const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;

const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputCase = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 229px);
  gap: ${spacing(4.5)};
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;

const PaginationAndOrderVerificationContainer = styled.div`
  display: flex;
  gap: ${spacing(4)};
`;
