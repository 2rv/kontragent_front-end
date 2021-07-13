import styled from 'styled-components';
import { SecondaryButton } from '../../../../lib/elements/button';
import { THEME_COLOR, spacing } from '../../../../lib/theme';

export function ListHeaderPaginationComponent(props) {
  const { currentPage, totalPages, disabled } = props;
  const paginationButtonArray = [];
  for (let i = 1; i < totalPages + 1; i++) paginationButtonArray.push(i);
  return (
    <PaginationContainer>
      {paginationButtonArray.map((page) => (
        <Button
          type="button"
          disabled={!disabled}
          pageActive={page === currentPage}
        >
          {page}
        </Button>
      ))}
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  display: flex;
  gap: ${spacing(4)};
`;

const Button = styled(SecondaryButton)`
  background-color: ${({ pageActive }) =>
    !pageActive && THEME_COLOR.COLOR.BASE};
  color: ${({ pageActive }) => !pageActive && THEME_COLOR.COLOR.PRIMARY};
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
