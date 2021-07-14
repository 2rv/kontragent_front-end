import styled from 'styled-components';
import { MyLegalEntitesHeaderComponent, LegalEntitiesListContainer } from './frame';
import { spacing } from '../../lib/theme';

export function MyLegalEntitiesListComponent(props) {
  const { myLegalEntitiesListData } = props;
  return (
    <Container>
      <MyLegalEntitesHeaderComponent />
      <LegalEntitiesListContainer
        myLegalEntitiesListData={myLegalEntitiesListData}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
  width: 100%;
`;
