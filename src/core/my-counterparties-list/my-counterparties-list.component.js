import styled from 'styled-components';
import { CounterpartiesListContainer } from './frame';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { FilterComponent } from '../../lib/elements/filter-component';
import { PrimaryButton, SecondaryButton } from '../../lib/elements/button';

export function MyCounterpartiesListComponent(props) {
  const { myCounterpartiesSelectOption, myCounterpartiesListData } = props;
  return (
    <Container>
      <FilterComponent
        titleTid="MY_COUNTERPARTIES_LIST.TITLE"
        selectOption={myCounterpartiesSelectOption}
        placeholderTid="MY_COUNTERPARTIES_LIST.FIELD.FIND_COUNTERPARTY"
      >
        <PaginationCase>
          <Button tid="1" pageActived={true} />
          <Button tid="2" />
          <Button tid="3" />
          <Button tid="4" />
          <PrimaryButton tid="Заказать проверку" />
        </PaginationCase>
      </FilterComponent>
      <CounterpartiesListContainer
        myCounterpartiesListData={myCounterpartiesListData}
      />
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
