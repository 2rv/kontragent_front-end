import { ListSortComponent } from './list-sort.component';
export function ListSortContainer(props) {
  const { sortOptions } = props;
  return <ListSortComponent sortOptions={sortOptions} />;
}
