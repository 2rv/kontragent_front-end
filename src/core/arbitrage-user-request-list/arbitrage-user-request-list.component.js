import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { ArbitrageRequestListContainer } from './frame/arbitrage-request-list';
import { FilterComponent } from '../../lib/elements/filter-component';
import { SecondaryButton } from '../../lib/elements/button';
export function ArbitrageUserRequestListComponent(props) {
  const { listData, selectOption } = props;
  return (
    <Container>
      <FilterComponent
        titleTid="Арбитраж"
        selectOption={selectOption}
        placeholderTid="Найти тему"
      >
        <PaginationCase>
          <Button tid="1" pageActived={true} />
          <Button tid="2" />
          <Button tid="3" />
          <Button tid="4" />
        </PaginationCase>
      </FilterComponent>
      <ArbitrageRequestListContainer listData={listData} />
    </Container>
  );
}
const Container = styled.div`
  padding: ${spacing(8)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
const PaginationCase = styled.div`
  display: flex;
  gap: ${spacing(3.5)};
`;
const Button = styled(SecondaryButton)`
  background-color: ${({ pageActived }) =>
    !pageActived && THEME_COLOR.COLOR.BASE};
  color: ${({ pageActived }) => !pageActived && THEME_COLOR.COLOR.PRIMARY};
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
