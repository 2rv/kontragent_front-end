import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { PrimaryLoader } from '../../lib/elements/loader';
import {
  LawyerRequestListContainer,
  LawyerRequestHeaderContainer,
} from './frame';

export function MyLawyerRequestListComponent(props) {
  const {
    myLawyerRequestListSelectOption,
    myLawyerRequestListData,
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
        <LawyerRequestHeaderContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          myLawyerRequestListSelectOption={myLawyerRequestListSelectOption}
        />
        <LawyerRequestListContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          myLawyerRequestListData={myLawyerRequestListData}
        />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
  flex: 1;
  flex-flow: column;
`;
