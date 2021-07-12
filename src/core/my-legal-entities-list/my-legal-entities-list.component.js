import styled from 'styled-components';
import { LegalEntitiesListContainer } from './frame';
import { spacing } from '../../lib/theme';

export function MyLegalEntitiesListComponent(props) {
  const { myLegalEntitiesListData } = props;
  return (
    <Container>
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
`;
