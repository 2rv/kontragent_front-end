import styled from 'styled-components';
import { LegalEntitiesListContainer } from './frame';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { FilterComponent } from '../../lib/elements/filter-component';
import { SecondaryButton } from '../../lib/elements/button';

export function MyLegalEntitiesListComponent(props) {
  const { myLegalEntitiesListData, myLegalEntitiesSelectOption } = props;
  return (
    <Container>
      <FilterComponent
        titleTid="Мои юр.лица"
        selectOption={myLegalEntitiesSelectOption}
        placeholderTid="Найти юр.лицо"
      />
      <LegalEntitiesListContainer
        myLegalEntitiesListData={myLegalEntitiesListData}
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
