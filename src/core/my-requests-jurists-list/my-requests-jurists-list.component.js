import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { RequestsJuristsListContainer } from './frame';
import { FilterComponent } from '../../lib/elements/filter-component';
import { SecondaryButton } from '../../lib/elements/button';

export function MyRequestsJuristsListComponent(props) {
  const { myRequestsJuristsListData, myRequestsJuristsSelectOption } = props;
  return (
    <Container>
      <FilterComponent
        titleTid="Мои запросы к юристам"
        selectOption={myRequestsJuristsSelectOption}
        placeholderTid="Найти запрос"
      />
      <RequestsJuristsListContainer
        myRequestsJuristsListData={myRequestsJuristsListData}
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
