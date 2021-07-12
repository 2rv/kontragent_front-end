import { ListHeaderComponent } from './list-header.component';
export function ListHeaderContainer(props) {
  const { myCounterpartiesSortOption } = props;
  return (
    <ListHeaderComponent
      myCounterpartiesSortOption={myCounterpartiesSortOption}
    />
  );
}
