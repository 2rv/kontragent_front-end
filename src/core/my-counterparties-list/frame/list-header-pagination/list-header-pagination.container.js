import { ListHeaderPaginationComponent } from './list-header-pagination.component';

export function ListHeaderPaginationContainer(props) {
  const { currentPage, totalPages, disabled } = props;

  return (
    <ListHeaderPaginationComponent
      currentPage={currentPage}
      totalPages={totalPages}
      disabled={disabled}
    />
  );
}
