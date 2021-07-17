import styled from 'styled-components';
import {
  MyLegalEntitesHeaderContainer,
  LegalEntitiesListContainer,
} from './frame';
import { spacing } from '../../lib/theme';
import { PrimaryLoader } from '../../lib/elements/loader';

export function MyLegalEntitiesListComponent(props) {
  const {
    myLegalEntitiesListData,
    myLegalEntitiesSelectOption,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <MyLegalEntitesHeaderContainer
          myLegalEntitiesSelectOption={myLegalEntitiesSelectOption}
        />
        <LegalEntitiesListContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          myLegalEntitiesListData={myLegalEntitiesListData}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  width: 100%;
`;
